# Random Date Generator — QA Testing Challenge

## Project Overview

This repository contains a manual QA assessment of the [Code Beautify Random Date Generator](https://codebeautify.org/generate-random-date).

The objective was to evaluate the generator's core functionality, input validation, date handling, formatting accuracy, and user interactions, while identifying reproducible defects and potential improvements.

## Test Environment

- **Operating System:** Windows 10
- **Browser:** Google Chrome
- **Testing Approach:** Manual Functional Testing, Exploratory Testing, and Playwright Automation

## Testing Techniques

- Equivalence Partitioning
- Boundary Value Analysis
- Positive and Negative Testing
- Exploratory Testing
- Basic Performance Exploration

## Test Results

A total of 14 test cases were designed, covering normal inputs, boundary conditions, invalid dates, custom formatting, generation triggers, and copy/download functionality.

| Result | Count |
|---|---:|
| Passed | 12 |
| Failed | 1 |
| Performance Observation | 1 |
| **Total** | **14** |

### Automated Testing Results

Three Playwright automated tests were implemented using JavaScript and Chromium.

| Test ID | Description | Result |
|---|---|---|
| AT-00 | Verify the generator page loads | PASS |
| AT-01 | Verify the requested number of dates is generated | PASS |
| AT-02 | Verify generated dates are valid and within the specified range | PASS |

**Result:** 3 passed, 0 failed.

The tests cover basic smoke testing, output count validation, and date range validation.

## Key Findings

### BUG-001 — Malformed Month Names in Custom Date Format

Using the custom format `YYYY month d` produced malformed month names such as `Augu11t`, `Marc0`, and `Nove53ber`.

The issue was reproduced across multiple test runs and documented with screenshots.

### Additional Observations

- Invalid dates such as `2025-02-29` were silently normalized to `2025-03-01`, while the input fields remained unchanged.
- Changing input parameters automatically regenerated random dates, including when changing only the display format.
- Large generation requests caused noticeable lag at 10,000 dates and an unresponsive page at 100,000 dates.

## Test Deliverables

| Document | Description |
|---|---|
| [Manual Test Cases](test-cases/manual-test-cases.md) | Test scenarios, steps, expected results, and execution outcomes |
| [Test Report](reports/test-report.md) | Test scope, approach, execution summary, findings, and limitations |
| [BUG-001 Report](reports/bug-report-01.md) | Reproduction steps, expected versus actual behavior, and supporting evidence |
| [Evidence](evidence/) | Screenshots documenting the reproduced defect |
| [Playwright Automation](automation/) | Three automated smoke and functional tests, including source code and dependencies |

## Conclusion

The assessment verified the generator's core functionality under the tested conditions and identified one reproducible formatting defect, alongside several usability and performance improvement opportunities.

The testing focused on clear documentation, reproducibility, and risk-based analysis within the scope of the technical challenge.
