# RESEARCH DOSSIER: WEBHOOK IDEMPOTENCY AND STATUS CONTRACTS
## Topic: The Polite 200 Trap and Async 202 Patterns

---

## 1. THE HUMAN WAR STORY: The Midnight Payment Gateway Collapse

**Date and Time:** 02:47 AM on Tuesday morning.
**Victim:** ProcessFlow payment processing webhook cluster.

Payment processing had stopped for seventeen minutes. Customers Stripe webhook handlers were receiving HTTP 200 OK responses from the API, confirming payment acceptance, but the actual database INSERT had silently failed. 847 payments were dropped into a black hole before latency monitoring triggered.

**The Forensic Investigation:**
The webhook handler was receiving requests and validating signatures. However, a junior engineer had added anti-fraud logic:

```javascript
if (request.body.amount > 10000) {
  logger.warn("Suspicious large transaction, manual review required");
  // BUG: Missing explicit return statement here
}
// Execution fell through and sent 200 OK anyway
```

A database trigger was routing flagged transactions into a separate `fraud_reviews` table rather than the primary `payments` ledger. The reporting dashboard only queried the main payments table. Upstream systems received 200 OK, assumed success, and stopped retrying.

**The Permanent Architecture:**
1. **Idempotency Key Enforcement:** Webhook requests require a unique UUID key; duplicate requests return 409 Conflict.
2. **Honest Status Codes:** Return 202 Accepted for async or manual review pipelines; return 200 OK only when the write commits.
3. **Reconciliation Audit:** Background jobs cross verify settlement status against upstream ledgers.

---

## 2. FORENSIC TECHNICAL BREAKDOWN

HTTP status codes are binding contracts. Returning 200 OK promises the client that requested side effects have executed and committed. When clients receive 200, retry mechanisms are suppressed. Returning 200 before database commit completes creates silent data loss.

---

## 3. EDGE CASE MATRIX AND NEGATIVE TRAPS

| # | Trap | Input Condition | Under the Hood | Failure Symptom |
|---|---|---|---|---|
| 1 | The Null Accepted Check | Request arrives with `amount: null` | `null > 10000` evaluates false, skipping fraud checks | Payments created with null amounts, distorting financial ledgers |
| 2 | Polite 200 on Dropped Connection | DB connection drops before COMMIT | Application error handler fails to intercept, sends 200 OK | Upstream marks transaction settled; database rolls back cleanly |
| 3 | Idempotency Race Condition | Two requests arrive within 50ms | Parallel SELECT checks see no existing key; both INSERT | Double billing and customer chargebacks |
| 4 | Mutation Leak | Client passes `status: "completed"` | Server inserts unverified status from request body | Unreviewed transactions bypass manual authorization |

---

## 4. CANONICAL PEDAGOGICAL SCHEMAS

### Schema 1: The Honest Status Contract
* **Input:** `POST /webhook/payment` with valid transaction payload.
* **Under the Hood:** Atomic database transaction commits record before HTTP response frame is generated.
* **Verified Output:** `200 OK` when committed; `202 Accepted` when queued for review; `500 Internal Server Error` on database failure.
* **Senior Savior Rule:** A 200 OK is a binding promise. Never send it until the transaction commits.

### Schema 2: The Idempotency Gate
* **Input:** Two identical POST requests within 50ms bearing matching `idempotencyKey`.
* **Under the Hood:** Unique database constraint or distributed lock serializes processing.
* **Verified Output:** Request 1 returns 200 OK; Request 2 returns 409 Conflict without duplicate side effects.
* **Senior Savior Rule:** Idempotency is mandatory for mutating webhooks.
