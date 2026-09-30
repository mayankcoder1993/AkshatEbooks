# Implementation Tasks: Dynamic Admin AI Key Vault

## Wave 1: Core Vault Engine & Backend Server
- [x] T001: Implement AES-256-GCM cipher with PBKDF2 key derivation in scripts/vault-utils.mjs
- [x] T002: Add runtime secrets to .gitignore (config/runtime-vault.json, 
ewkey)
- [ ] T003: Implement Admin & AI Proxy endpoints in scripts/mock-api-server.mjs:
  - GET /api/admin/ai-status
  - POST /api/admin/ai-config
  - POST /api/ai/generate

## Wave 2: Frontend Dynamic Admin Modal
- [ ] T004: Create AdminVaultModal.jsx component with:
  - Admin Passphrase input
  - Gemini API key input field
  - AI Enable / Disable toggle switch
  - Status indicators (Connected / Not Configured)
- [ ] T005: Mount Admin modal in the reader navbar/header

## Wave 3: Empirical Validation & Pipeline Verification
- [ ] T006: Run test suite against /api/admin/ai-config and /api/ai/generate
- [ ] T007: Run 
pm run prepare:books to ensure zero regressions
- [ ] T008: Perform git security leak audit
