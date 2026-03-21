import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, submissions, Submission, InsertSubmission } from "../drizzle/schema";
import { nanoid } from "nanoid";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Create a new document submission
 */
export async function createSubmission(data: Omit<InsertSubmission, 'submissionId'>): Promise<Submission> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const submissionId = nanoid(16);
  const submission: InsertSubmission = {
    ...data,
    submissionId,
  };

  await db.insert(submissions).values(submission);
  
  const result = await db.select().from(submissions).where(eq(submissions.submissionId, submissionId)).limit(1);
  if (!result[0]) throw new Error("Failed to create submission");
  
  return result[0];
}

/**
 * Get submission by ID
 */
export async function getSubmissionById(submissionId: string): Promise<Submission | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(submissions).where(eq(submissions.submissionId, submissionId)).limit(1);
  return result[0];
}

/**
 * Update submission
 */
export async function updateSubmission(submissionId: string, updates: Partial<InsertSubmission>): Promise<Submission> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(submissions).set({ ...updates, updatedAt: new Date() }).where(eq(submissions.submissionId, submissionId));
  
  const result = await db.select().from(submissions).where(eq(submissions.submissionId, submissionId)).limit(1);
  if (!result[0]) throw new Error("Failed to update submission");
  
  return result[0];
}

/**
 * Get all submissions (admin only)
 */
export async function getAllSubmissions(): Promise<Submission[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(submissions).orderBy(submissions.createdAt);
}
