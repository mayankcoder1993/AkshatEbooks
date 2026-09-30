# Feature Specification: Dynamic Admin AI Key Vault & Toggle Control

**Feature ID:** 001-dynamic-admin-vault
**Status:** SPECIFIED
**Created:** 2026-09-30
**Authors:** Akshat Sinha, Antigravity Agent

---

## 1. User Story & Motivation
As the publishing platform administrator,
I want to configure the AI API key and toggle generation ON or OFF dynamically through a secure frontend admin modal,
So that:
1. The repository code remains 100% portable and safe for public GitHub hosting with ZERO exposed secrets.
2. When deploying to any new machine or cloud host, I can input the key once without touching code or .env files.
3. I can rotate keys or disable AI anytime to protect rate limits and quotas.

---

## 2. Functional Requirements
- **FR-1**: Persistent Encrypted Storage: Secrets must be encrypted with AES-256-GCM and stored only in server persistent storage (config/runtime-vault.json), which is strictly excluded from Git.
- **FR-2**: Admin Authentication: Configuration mutations require the administrator passphrase (default configured at startup).
- **FR-3**: AI Toggle Control: Admin can switch AI capability between ENABLED and DISABLED.
- **FR-4**: Secure Server Proxy: The frontend never receives raw API keys. All AI calls route through POST /api/ai/generate, which checks the toggle and injects the decrypted key in-memory on the backend.
- **FR-5**: Public Status Endpoint: GET /api/admin/ai-status returns public metadata ({ aiEnabled: boolean, configured: boolean }).

---

## 3. Acceptance Criteria
- [ ] AC-1: Git status audit confirms zero keys or vault files tracked.
- [ ] AC-2: GET /api/admin/ai-status reports { configured: false, aiEnabled: false } on clean deployment.
- [ ] AC-3: POST /api/admin/ai-config with valid passphrase encrypts key and returns success.
- [ ] AC-4: POST /api/ai/generate succeeds when enabled and rejects when toggled off with a clear 403 Forbidden.
