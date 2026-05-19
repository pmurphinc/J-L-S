# Railway Deployment

## Required Railway environment variables

```env
NODE_ENV=production
DATABASE_URL=<Railway MySQL connection URL>
JWT_SECRET=<strong random secret>
OWNER_OPEN_ID=<optional/admin only>
```

## Build command

```bash
pnpm build
```

## Start command

```bash
pnpm start
```

## First-time database setup

```bash
pnpm db:push
```

## Migration warning

Do **not** run `pnpm db:push` automatically on every deploy unless we intentionally decide to manage migrations that way later.

## DNS cutover checklist

1. Test the Railway-generated domain first.
2. Add the custom domain in Railway.
3. Add Railway’s required DNS records.
4. Remove old Manus DNS records only after Railway is verified live.

## TODO: Manus cleanup (separate PR)

- Review `vite-plugin-manus-runtime`.
- Review Manus debug collector in `vite.config.ts`.
- Remove Manus-specific logging/runtime code only in a separate cleanup PR.
