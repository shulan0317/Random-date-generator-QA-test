# Random Date Generator — QA Test Report

## 1. Test Overview

**Application Under Test:** Code Beautify Random Date Generator  
**URL:** https://codebeautify.org/generate-random-date  
**Test Environment:** Windows 10, Google Chrome  
**Testing Type:** Manual Functional Testing and Exploratory Testing

### Objective

Evaluate the functionality, input handling, date validity, formatting, user interactions, and basic performance of the Random Date Generator.

### Scope

Testing focused exclusively on the Random Date Generator, including:

- Date count and date range inputs
- Valid and invalid dates
- Predefined and custom output formats
- Date generation triggers
- Copy and download functionality
- Basic responsiveness with large output requests

Other website features were excluded from testing.

## 2. Test Approach

The following testing techniques were applied:

- **Equivalence Partitioning:** Testing valid and invalid input categories.
- **Boundary Value Analysis:** Testing zero, negative counts, identical date boundaries, and leap days.
- **Positive and Negative Testing:** Verifying both valid inputs and invalid input handling.
- **Exploratory Testing:** Investigating unexpected formatting behavior and automatic regeneration.
- **Basic Performance Exploration:** Observing responsiveness with large date counts.

Testing was performed manually through the browser interface.

## 3. Test Execution Summary

| Metric | Result |
|---|---|
| Total Test Cases | 14 |
| Passed | 12 |
| Failed | 1 |
| Performance Observation | 1 |

### Test Case Results

| Test Case | Description | Result |
|---|---|---|
| TC-01 | Generate a valid number of dates | PASS |
| TC-02 | Generate a single date | PASS |
| TC-03 | Handle zero date count | PASS |
| TC-04 | Handle negative date count | PASS |
| TC-05 | Generate dates within a specified range | PASS |
| TC-06 | Equal start and end dates | PASS |
| TC-07 | Reversed date range | PASS |
| TC-08A | Valid leap day | PASS |
| TC-08B | Invalid leap day | PASS |
| TC-09 | Predefined date output formats | PASS |
| TC-10 | Custom date format | FAIL |
| TC-11 | Date generation triggers | PASS |
| TC-12 | Copy and download functionality | PASS |
| TC-13 | Large date count and responsiveness | OBSERVED |

Detailed test cases and execution results are documented in [Manual Test Cases](../test-cases/manual-test-cases.md).

## 4. Defects Identified

### BUG-001 — Malformed Month Names in Custom Date Format

**Severity:** Medium  
**Priority:** High  
**Related Test Case:** TC-10

When using the custom date format `YYYY month d`, the generator sometimes produces corrupted month names.

Examples:

- `1900 Augu11t 2`
- `1900 Marc0 3`
- `1900 Nove53ber 6`

The issue was reproduced across multiple generation attempts.

**Impact:** Generated output may contain invalid month names, reducing the reliability of copied or downloaded date data.

See [BUG-001 Report](bug-report-01.md) for reproduction steps and screenshots.

## 5. Additional Observations

### 5.1 Invalid Date Normalization

Entering the nonexistent date `2025-02-29` resulted in `2025-03-01` being generated.

The original invalid date remained visible in the input fields, and no notification was displayed.

**Improvement Suggestion:** Notify users when invalid dates are automatically normalized or update the input fields to reflect the actual dates used.

### 5.2 Automatic Regeneration

The application automatically regenerated dates when the date count, start date, end date, or output format was changed.

**Improvement Suggestion:** Consider preserving generated date values when users change only the display format.

### 5.3 Large Date Count Responsiveness

Noticeable lag was observed when requesting 10,000 dates. The page became unresponsive when requesting 100,000 dates.

**Improvement Suggestion:** Introduce a maximum date count or safeguards against excessive generation requests.

No formal response-time requirement or maximum supported date count was available. These findings are therefore documented as performance observations rather than confirmed requirement violations.

## 6. Test Limitations

- Testing was conducted manually in Google Chrome on Windows 10.
- Cross-browser and mobile compatibility were not evaluated.
- No automated test suite was implemented.
- Performance observations were qualitative; no benchmark measurements were collected.
- Some expected behaviors were based on reasonable QA assumptions because detailed product requirements were unavailable.

## 7. Conclusion

The Random Date Generator passed the majority of the executed functional test cases, including standard date generation, date range handling, predefined formats, and copy/download functionality.

One reproducible functional defect was identified in custom date formatting, where full month names were corrupted.

Additional opportunities for improvement were observed in input feedback, automatic regeneration behavior, and handling of large generation requests.

The application demonstrated working core functionality under the tested conditions, but the custom date formatting defect should be addressed to improve output reliability.
