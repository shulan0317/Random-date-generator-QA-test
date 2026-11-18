# BUG-001 — Custom Date Format Corrupts Month Names

**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Test Case:** TC-10

## Description

The Random Date Generator produces malformed English month names when using the custom date format `YYYY month d`. Some letters in month names are replaced with numeric characters, resulting in incorrectly formatted dates.

## Steps to Reproduce

1. Open https://codebeautify.org/generate-random-date.
2. Set the number of dates to 20.
3. Select `Custom date format`.
4. Enter `YYYY month d` in the custom format field.
5. Set the start date to `1900-01-01 00:00:00`.
6. Set the end date to `1900-12-30 23:59:59`.
7. Click `Generate Random Date`.
8. Inspect the generated month names.

## Expected Result

All generated dates should contain correctly spelled English month names, such as `1900 August 2` or `1900 November 6`.

## Actual Result

Some generated dates contain malformed month names, including:

- `1900 Augu11t 2
- `1900 Marc0 3
- `1900 Nove53ber 6

## Reproducibility

Reproduced across two generation attempts.

## Impact

The generated dates do not consistently follow the selected custom format. This can make the output unreliable for users who copy or export formatted dates.

## Evidence

Screenshot 1 — Initial occurrence

Screenshot 2 — Reproduction

## Possible Cause (Unconfirmed)

The date-formatting implementation may be applying overlapping token replacements to month-name strings.
