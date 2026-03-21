import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Document submissions table
 * Stores client uploads and processing status
 */
export const submissions = mysqlTable("submissions", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique submission identifier */
  submissionId: varchar("submissionId", { length: 64 }).notNull().unique(),
  /** Client email (not authenticated, so we store it) */
  clientEmail: varchar("clientEmail", { length: 320 }).notNull(),
  /** Client full name */
  clientName: varchar("clientName", { length: 255 }).notNull(),
  /** Client phone number */
  clientPhone: varchar("clientPhone", { length: 20 }).notNull(),
  /** Service type selected */
  serviceType: varchar("serviceType", { length: 100 }).notNull(),
  /** Brief description of the request */
  description: text("description").notNull(),
  /** Original uploaded file URL (S3) */
  uploadedFileUrl: text("uploadedFileUrl"),
  /** Original uploaded file key (S3) */
  uploadedFileKey: varchar("uploadedFileKey", { length: 255 }),
  /** Status: pending, processing, completed, failed */
  status: mysqlEnum("status", ["pending", "processing", "completed", "failed"]).default("pending").notNull(),
  /** Payment status: unpaid, paid, refunded */
  paymentStatus: mysqlEnum("paymentStatus", ["unpaid", "paid", "refunded"]).default("unpaid").notNull(),
  /** Payment method: stripe, venmo, manual */
  paymentMethod: varchar("paymentMethod", { length: 50 }),
  /** Stripe payment intent ID (if applicable) */
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  /** Amount paid in cents (USD) */
  amountPaid: int("amountPaid"),
  /** OCR'd text from the document */
  ocrText: text("ocrText"),
  /** AI-drafted document (from ChatGPT) */
  draftedDocument: text("draftedDocument"),
  /** Drafted document URL (S3) */
  draftedFileUrl: text("draftedFileUrl"),
  /** Drafted document key (S3) */
  draftedFileKey: varchar("draftedFileKey", { length: 255 }),
  /** Processing notes/errors */
  processingNotes: text("processingNotes"),
  /** When the draft was emailed to the client */
  emailSentAt: timestamp("emailSentAt"),
  /** Creation timestamp */
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  /** Last update timestamp */
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Submission = typeof submissions.$inferSelect;
export type InsertSubmission = typeof submissions.$inferInsert;