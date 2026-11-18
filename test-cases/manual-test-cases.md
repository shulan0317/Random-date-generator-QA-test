# Manual Test Cases — Random Date Generator

**Application:** Code Beautify Random Date Generator  
**URL:** https://codebeautify.org/generate-random-date  
**Test Type:** Manual Functional Testing

## TC-01 — Generate a Valid Number of Random Dates

**Priority:** High  
**Test Data:** Number of Dates = 5; default date range

**Test Steps:**
1. Open the Random Date Generator.
2. Set the number of dates to 5.
3. Keep the default start and end dates.
4. Click the Generate button.
5. Verify the number and validity of generated dates.

**Expected Result:** Exactly 5 valid dates are generated within the specified date range.

**Actual Result:** Exactly 5 valid dates were generated, all within the specified date range.

**Status:** PASS

---

## TC-02 — Generate a Single Random Date

**Priority:** High  
**Test Data:** Number of Dates = 1; default date range

**Test Steps:**
1. Set the number of dates to 1.
2. Keep the default start and end dates.
3. Click the Generate button.
4. Verify the generated result.

**Expected Result:** Exactly 1 valid date is generated within the specified date range.

**Actual Result:** Exactly 1 valid date is generated within the specified date range.

**Status:** PASS

---

## TC-03 — Generate Zero Random Dates

**Priority:** High  
**Test Data:** Number of Dates = 0; default date range

**Test Steps:**
1. Set the number of dates to 0.
2. Keep the default start and end dates.
3. Click the Generate button.
4. Verify the generated result.

**Expected Result:** No dates are generated for a zero count, and the application remains functional.

**Actual Result:** No dates were generated. The output area remained empty, and no validation message was displayed.

**Status:** PASS

Improvement Candidate: Consider displaying a validation message for negative date counts to help users understand why no results were generated.

---

## TC-04 — Generate Negative Random Dates

**Priority:** High  
**Test Data:** Number of Dates = -1; default date range

**Test Steps:**
1. Set the number of dates to -1.
2. Keep the default start and end dates.
3. Click the Generate button.
4. Verify the generated result.

**Expected Result:** No dates are generated for a negative count, and the application remains functional.

**Actual Result:** No dates were generated. The output area remained empty, and no validation message was displayed.

**Status:** PASS

Improvement Candidate: Consider displaying a validation message for negative date counts to help users understand why no results were generated.

---

## TC-05 — Generate Dates Within a Specified Range

**Priority:** High  
**Test Data:**
- Number of Dates = 10
- Start Date = 2026-01-01 00:00:00
- End Date = 2026-12-31 23:59:59
- Date Output Format = MM-DD-YYYY

**Test Steps:**
1. Set the number of dates to 10.
2. Set the start date to 2026-01-01 00:00:00.
3. Set the end date to 2026-12-31 23:59:59.
4. Select the MM-DD-YYYY output format.
5. Click the Generate Random Date button.
6. Verify that exactly 10 dates are generated.
7. Verify that every generated date falls within the specified range.

**Expected Result:** Exactly 10 valid dates are generated, and every date falls between January 1, 2024, and December 31, 2024.

**Actual Result:** Exactly 10 valid dates were generated, all within the specified date range (2026-01-01 to 2026-12-31).

**Status:** PASS

---

## TC-06 — Generate Dates When Start and End Dates Are Equal

**Priority:** High

**Test Data:**
- Number of Dates = 5
- Start Date = 2024-06-15 12:30:00
- End Date = 2024-06-15 12:30:00
- Date Output Format = MM-DD-YYYY hh:mm:ss

**Test Steps:**
1. Set the number of dates to 5.
2. Set the start date to 2024-06-15 12:30:00.
3. Set the end date to 2024-06-15 12:30:00.
4. Click the Generate Random Date button.
5. Verify the generated dates.

**Expected Result:** Exactly 5 dates are generated, all corresponding to June 15, 2024.

**Actual Result:** Exactly 5 dates were generated, all displaying 06-15-2024.

**Status:** PASS

---

## TC-07 — Handle Reversed Date Range

**Priority:** High

**Test Data:**
- Number of Dates = 5
- Start Date = 2025-12-31 23:59:59
- End Date = 2024-01-01 00:00:00
- Date Output Format = MM-DD-YYYY

**Test Steps:**
1. Set the number of dates to 5.
2. Set the start date to 2025-12-31 23:59:59.
3. Set the end date to 2024-01-01 00:00:00.
4. Click the Generate Random Date button.
5. Observe the generated dates and any validation messages.
6. Check whether the application automatically reverses the date range.

**Expected Result:** The application handles the reversed date range without crashing. It may reject the input or automatically normalize the date range, since the expected behavior is not explicitly specified.

**Actual Result:** The application automatically treated the earlier date as the start and the later date as the end. Generated dates fell within the normalized range. No error or validation message was displayed.

**Status:** PASS

Improvement Candidate: Consider notifying users when the date range is automatically reversed to make the behavior more transparent.

---

## TC-08A — Valid Leap Day

**Priority:** High

**Test Data:**
- Number of Dates = 5
- Start Date = 2024-02-29 00:00:00
- End Date = 2024-02-29 23:59:59
- Date Output Format = MM-DD-YYYY hh:mm:ss

**Expected Result:** Exactly 5 valid dates are generated, all displaying 02-29-2024.

**Actual Result:** The generator successfully produced the valid leap-day date, 02-29-2024.

**Status:** PASS

---

## TC-08B — Invalid Leap Day

**Priority:** High

**Test Data:**
- Number of Dates = 5
- Start Date = 2025-02-29 00:00:00
- End Date = 2025-02-29 23:59:59
- Date Output Format = MM-DD-YYYY hh:mm:ss

**Expected Result:** The application does not generate the nonexistent date 02-29-2025. Invalid date input should be handled safely.

**Actual Result:** When the invalid date 2025-02-29 was entered as both the start and end dates, the generator produced 03-01-2025. However, both input fields continued to display 2025-02-29, and no validation or normalization message was shown.

Status: PASS

**Note:** Date validity check passed. However, the application silently normalized the invalid input without updating the input fields or notifying the user.

**Improvement Candidate:** Provide feedback when an invalid date is automatically normalized.

---

## TC-09 — Predefined Date Output Formats

**Priority:** High

**Test Data:**
- Number of Dates = 5
- Date range = 2024-01-01 to 2024-12-31
- Output formats = MM-DD-YYYY and YYYY-MM-DD

**Expected Result:** Generated dates follow the selected output format.

**Actual Result:** The generated dates correctly followed each selected output format.

**Status:** PASS

**Note:** Automatic regeneration behavior is documented separately in TC-11.

---

## TC-10 — Custom Date Format

**Priority:** High

**Test Data:**
- Number of Dates = 20
- Start Date = 1900-01-01 00:00:00
- End Date = 1900-12-30 23:59:59
- Date Output Format = Custom date format
- Custom Date Format = YYYY month d

**Expected Result:** All generated dates follow the custom format, with valid full English month names.

**Actual Result:** The generator produced 20 dates, but some month names contained unexpected numeric characters or missing letters. Examples include "Augu11t", "Marc0", and "Nove53ber". The issue was reproduced across multiple generations.

**Status:** FAIL

**Defect ID:** BUG-001

---

## TC-11 — Verify Date Generation Triggers

**Priority:** Medium

**Test Data:**
- Number of Dates = 5
- Start Date = 2024-01-01 00:00:00
- End Date = 2024-12-31 23:59:59
- Date Output Format = MM-DD-YYYY

**Test Steps:**
1. Generate 5 random dates using the specified parameters.
2. Click the Generate button again without changing any parameters.
3. Change the number of dates from 5 to 3.
4. Modify the start date.
5. Modify the end date.
6. Change the date output format.
7. Observe whether the output updates after each action.

**Expected Result:** Clicking Generate produces valid random dates. Changes to input parameters are reflected in the generated output, either automatically or after explicit generation.

**Actual Result:** Clicking the Generate button and modifying the date count, start date, end date, or output format all triggered date generation automatically. The output responded to each tested action.

**Status:** PASS

**Note:** The application uses automatic regeneration when input parameters change. This behavior may be intentional. Consider preserving existing dates when users change only the display format.

---

## TC-12 — Copy and Download Generated Dates

**Priority:** Medium

**Test Data:**
- Number of Dates = 5
- Start Date = 2024-01-01 00:00:00
- End Date = 2024-12-31 23:59:59
- Date Output Format = MM-DD-YYYY

**Test Steps:**
1. Generate 5 random dates.
2. Click the Copy button.
3. Paste the copied content into a text editor.
4. Compare the pasted content with the generated output.
5. Click the Download button.
6. Open the downloaded file.
7. Compare the downloaded content with the generated output.

**Expected Result:** Both the copied and downloaded content match the generated dates, including the number of dates, their values, and their formatting.

**Actual Result:** Both the copied and downloaded content matched the generated output, including the date count, values, and formatting. The downloaded file opened successfully.

**Status:** PASS

---

## TC-13 — Large Date Count and Performance

**Priority:** Medium

**Test Data:**
- Number of Dates = 10,000 and 100,000
- Date range = 2024-01-01 to 2024-12-31
- Date Output Format = MM-DD-YYYY

**Test Steps:**
1. Set the number of dates to 10,000.
2. Observe the application's responsiveness.
3. Increase the number of dates to 100,000.
4. Observe whether the application remains responsive.

**Expected Result:** The application should handle large requests gracefully, either by generating the dates or providing appropriate feedback when resource limits are reached. No maximum count or response-time requirement is documented.

**Actual Result:** Noticeable lag occurred when requesting 10,000 dates. When the requested count was increased to 100,000, the page became unresponsive.

**Status:** OBSERVED — Performance Concern

**Improvement Candidate:** Consider introducing a maximum date count, input validation, or safeguards to prevent excessive requests from making the page unresponsive.
