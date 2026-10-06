# DEEP TECHNICAL DOSSIER: CHAPTER 5

## THE MONSOON BOOK DROP

### Data Driven Testing with CSV and JSON Parameterization in Postman and Newman

---

# 1. THE HUMAN WAR STORY (THE ON CALL NIGHTMARE)

## The Payroll Batch That Paid Everyone Twice (And Then Paid Nobody)

**Date:** Thursday, March 14, 2019
**Time:** 11:47 PM GMT, twelve hours before payday
**Victim:** A UK financial services firm processing payroll for 340 corporate clients, covering approximately 68,000 employees

The payroll processing pipeline was a scheduled batch job. Every Thursday night at 10:00 PM, the system ingested a consolidated CSV file containing salary records from 340 client companies. Each row represented one employee payment: employee ID, sort code, account number, payment amount, tax deduction, and a reference string. The file contained 68,412 rows. The pipeline parsed the CSV, validated each row against the employee master database, calculated net payments, generated BACS submission files, and queued them for Friday morning settlement.

At 11:47 PM, the on call engineer received an automated alert: the batch processor had completed in 4 minutes instead of the usual 22 minutes. The summary email reported 68,412 rows processed, zero errors. The engineer glanced at the metrics, saw zero errors, and went back to sleep.

At 06:15 AM Friday, the first client company finance director called: employees had received zero payments. By 08:30 AM, the support queue held 200 tickets. The BACS submission files were examined: they were completely empty. Zero payment instructions had been generated despite the batch processor reporting 68,412 successful row processings.

**The real root cause: CSV column shift caused by unescaped commas in employer names**

The consolidated CSV file was assembled by concatenating individual client files. One client company, registered as "Henderson, Clarke & Partners Ltd", had submitted their payroll file with the company name column unquoted. The comma in the company name split the field into two columns, shifting every subsequent column in that row one position to the right. The employee ID column now contained the second half of the company name ("Clarke & Partners Ltd"). The sort code column contained what should have been the employee ID.

The batch processor CSV parser was configured with default settings: no strict column count validation, no quoted field handling enforcement, and no schema verification after parsing. The parser silently accepted the shifted row. Furthermore, the payment generation module had an exception handling flaw:

```javascript
try {
    bacsInstructions = accumulatePayments(parsedRows);
} catch (err) {
    logger.error('Payment accumulation failed:', err.message);
    bacsInstructions = []; // Wiped all accumulated payments on single error
}

writeBacsFile(bacsInstructions); // Wrote an empty file
```

The error handler response to a single bad row was to discard all 67,522 good payments. 68,000 people were not paid on Friday morning. Remediation costs exceeded 2.1 million pounds.

---

## The Public Health England 16,000 Record Spreadsheet Truncation

**Date:** October 2020
**Victim:** NHS Test and Trace system

In October 2020, Public Health England experienced a failure where 15,841 positive COVID cases were omitted from contact tracing dashboards. The root cause was an automated process passing data through a legacy Microsoft Excel XLS file format with an absolute hard ceiling of 65,536 rows. When the daily batch exceeded that capacity, excess rows were silently truncated without triggering application error alarms.

---

# 2. FORENSIC TECHNICAL BREAKDOWN (THE ROOT CAUSE)

## How Newman Processes CSV and JSON Data Files

When Newman runs a data file via `-d data.csv -n 500`:

1. **File Ingestion:** Newman reads `.csv` or `.json`. CSV values are parsed as text strings. JSON values preserve data types (integers, booleans, objects).
2. **Iteration Loop:** Newman loops through rows. In each iteration, the row object is loaded into Data scope (`pm.iterationData`).
3. **Variable Precedence:** Data scope overrides Local, Environment, Collection, and Global scopes for `{{variable}}` resolution.
4. **Type Coercion Pitfall:** A status column in CSV yields string `"201"`, not integer `201`. Asserting `pm.response.code === pm.iterationData.get("expectedStatus")` fails under strict equality unless parsed with `parseInt()`.

## The Variable Leakage Trap

`pm.environment` variables persist across all iterations in a collection run. If iteration 1 writes `pm.environment.set("createdId", response.id)`, and iteration 2 fails without writing, iteration 2 can read the stale ID from iteration 1. This masks failures and creates false green test passes.

## Character Encoding and Delimiter Traps

1. **UTF 8 Byte Order Mark (BOM):** Excel prepends `EF BB BF` to CSV files. The first column header becomes `\uFEFFisbn`. Calling `pm.iterationData.get("isbn")` returns `undefined`.
2. **Unquoted Commas:** A book title like `"Eats, Shoots & Leaves"` without double quotes splits across columns, shifting status codes into adjacent cells and resulting in `NaN` assertions.
3. **Spreadsheet Type Coercion:** Opening CSV files in Excel strips leading zeros from ISBNs and converts hyphenated strings into calendar dates.

---

# 3. THE PRODUCTION FIX AND ARCHITECTURAL RULE

## Pre Request State Reset

```javascript
// Collection level Pre Request script: reset state before each iteration
pm.environment.unset("lastCreatedId");
pm.environment.unset("lastCreatedIsbn");

// Validate iteration data availability
const isbn = pm.iterationData.get("isbn");
const rawStatus = pm.iterationData.get("expectedStatus");

if (rawStatus === undefined) {
    throw new Error("Missing expectedStatus column. Check for BOM corruption.");
}
```

## Dynamic Assertion Mapping

```javascript
const expectedStatus = parseInt(pm.iterationData.get("expectedStatus"), 10);
const expectedMessage = pm.iterationData.get("expectedMessage");
const iterationLabel = pm.iterationData.get("isbn") || "empty-isbn";

pm.test(`[${iterationLabel}] Status is ${expectedStatus}`, function () {
    pm.expect(pm.response.code).to.equal(expectedStatus);
});

if (expectedMessage) {
    pm.test(`[${iterationLabel}] Body contains expected message`, function () {
        const bodyText = JSON.stringify(pm.response.json());
        pm.expect(bodyText).to.include(expectedMessage);
    });
}
```

---

# 4. EDGE CASE MATRIX AND NEGATIVE TRAPS

| # | Trap | Input Condition | Under the Hood | Failure Symptom |
|---|---|---|---|---|
| 1 | The Leaky Variable | Iteration 1 sets `createdId`; Iteration 2 reads it on failure | Environment scope persists across iteration boundaries | False positive pass where Iteration 2 validates resource from Iteration 1 |
| 2 | CSV Type Coercion | ISBN with leading zero `07102` | Spreadsheet casts to number, stripping leading zeros | API rejects truncated identifier with 400 Bad Request |
| 3 | Unquoted Delimiter Collision | Title containing unquoted comma | Parser splits title into two columns, shifting downstream fields | `expectedStatus` becomes string text, assertion fails with NaN |
| 4 | BOM Header Corruption | UTF 8 file with `EF BB BF` bytes | First header parsed as `\uFEFFisbn` | `pm.iterationData.get("isbn")` returns undefined for all rows |

---

# 5. THREE CANONICAL 4 PART PEDAGOGICAL SCHEMAS

### Schema 5.1: Parameterized POST with CSV Data
* **Input:** `POST /v1/books` with body `{"isbn": "{{isbn}}", "title": "{{title}}", "author": "{{author}}", "aisle": "{{aisle}}"}` driven by CSV data row.
* **Under the Hood:** Newman loads CSV row into Data scope, substitutes placeholders, dispatches HTTP request, and executes dynamic assertions.
* **Verified Output:** Response code matches `expectedStatus` column across 500 sequential iterations.
* **Senior Savior Rule:** Parameterize your assertions just like your URLs. Hardcoded expectations defeat data driven execution.

### Schema 5.2: Negative Row Validation (Missing Fields)
* **Input:** CSV row with empty ISBN cell expecting status 400.
* **Under the Hood:** Placeholder resolves to empty string, server input validation guard catches empty string, returns 400 Bad Request in 4ms.
* **Verified Output:** Status 400 confirmed by dynamic assertion `pm.expect(pm.response.code).to.equal(400)`.
* **Senior Savior Rule:** The CSV row is the test case, not the script. Change data, not code.

### Schema 5.3: Iteration Scope Isolation and Cleanup
* **Input:** Pre request script clearing environment state before each iteration.
* **Under the Hood:** Collection level pre request unsets mutable environment keys, preventing state from bleeding between rows.
* **Verified Output:** Zero cross iteration pollution; each test scenario runs in an isolated sandbox.
* **Senior Savior Rule:** Local scope dies between iterations; environment scope does not. Clean up before every row.
