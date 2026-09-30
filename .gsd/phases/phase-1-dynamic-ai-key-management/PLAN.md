# PLAN: Phase 1 - Dynamic Admin Key Management & Security Architecture

<objective>
Implement an enterprise-grade, zero-git-leak dynamic key management and AI proxy system.
The admin can authenticate, paste/rotate keys, and toggle AI generation from the web interface.
All secrets are encrypted with AES-256-GCM and stored only in server persistent storage (.gitignored).
</objective>

<tasks>
<task id=" 1.1\>
 <name>Create Vault Encryption Helper</name>
 <description>Implement AES-256-GCM encrypt/decrypt utilities using Node.js crypto module in scripts/vault-utils.mjs</description>
 <verification>Run standalone encryption/decryption unit test roundtrip</verification>
</task>

<task id=\1.2\>
 <name>Add Backend Admin & AI Proxy Endpoints</name>
 <description>Add /api/admin/ai-status, /api/admin/ai-config, and /api/ai/generate to scripts/mock-api-server.mjs</description>
 <verification>Test endpoints via curl/Invoke-RestMethod with positive and negative auth scenarios</verification>
</task>

<task id=\1.3\>
 <name>Update .gitignore for Runtime Vault</name>
 <description>Ensure config/runtime-vault.json and any key files are strictly ignored by git</description>
 <verification>git status --ignored confirms no secret tracking</verification>
</task>
</tasks>
