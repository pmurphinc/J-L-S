# Justice Litigation Solutions — Development TODO

## Phase 1: Upgrade & Setup
- [x] Initialize web-static project
- [x] Generate visual assets (Lady Justice, portraits, flat-lay)
- [x] Build 6-page website (Home, About, Services, Pricing, Contact, Disclaimer)
- [x] Upgrade to web-db-user (full-stack)

## Phase 2: Document Upload + Payment Workflow (NEW)
- [x] Resolve template conflicts (Home.tsx, NotFound.tsx)
- [x] Design database schema for submissions (documents, drafts, payments)
- [x] Build document upload form with payment flow
- [x] Integrate Stripe payment processing (UI ready, backend ready)
- [x] Implement Venmo payment option (manual/link)
- [x] Add file storage to S3 (via storagePut helper)
- [x] Create backend API for document processing
- [ ] Implement email delivery system
- [x] Add ChatGPT OCR + drafting integration (via invokeLLM)
- [x] Test full workflow end-to-end (7 tests passing)

## Phase 3: Polish & Launch
- [ ] Mobile responsiveness check
- [ ] Error handling & edge cases
- [ ] Security review (file uploads, payment handling)
- [ ] Final testing
- [ ] Deploy to production
