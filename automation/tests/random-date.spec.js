const { test, expect } = require('@playwright/test');

test('AT-00: Random Date Generator page loads', async ({ page }) => {
  await page.goto('https://codebeautify.org/generate-random-date');

  await expect(page).toHaveURL(/generate-random-date/);
});


//AT-01
test('AT-01: Generate five random dates', async ({ page }) => {
  await page.goto('https://codebeautify.org/generate-random-date');

  // Set the requested number of dates
  await page.locator('#count').fill('5');

  // Generate dates
  await page.getByRole('button', {
    name: 'Generate Random Date'
  }).click();

  // Read the generated output
  const output = page.getByRole('textbox', {
    name: 'Generated Random Integer'
  });

  const text = await output.inputValue();

  // Split output into non-empty lines
  const dates = text.split(/\r?\n/).filter(line => line.trim() !== '');

  // Verify exactly five dates were generated
  expect(dates).toHaveLength(5);
});

//AT-02

test('AT-02: Generated dates stay within the specified range', async ({ page }) => {
  await page.goto('https://codebeautify.org/generate-random-date');

  // Define the expected date range
  const startDate = Date.UTC(2024, 0, 1);
  const endDate = Date.UTC(2024, 11, 31);

  // Configure the generator
  await page.locator('#count').fill('5');
  await page.locator('#start').fill('2024-01-01 00:00:00');
  await page.locator('#end').fill('2024-12-31 23:59:59');

  await page.getByRole('button', {
    name: 'Generate Random Date'
  }).click();

  // Read the generated dates
  const output = page.getByRole('textbox', {
    name: 'Generated Random Integer'
  });

  const text = await output.inputValue();
  const dates = text.split(/\r?\n/).filter(line => line.trim() !== '');

  expect(dates).toHaveLength(5);

  for (const dateText of dates) {
    // Expected format: MM-DD-YYYY
    const match = dateText.trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);

    expect(match, `Unexpected date format: ${dateText}`).not.toBeNull();

    const [, month, day, year] = match;
    const parsedDate = Date.UTC(Number(year), Number(month) - 1, Number(day));

    // Verify that the date is valid
    const normalized = new Date(parsedDate);
    expect(normalized.getUTCFullYear()).toBe(Number(year));
    expect(normalized.getUTCMonth() + 1).toBe(Number(month));
    expect(normalized.getUTCDate()).toBe(Number(day));

    // Verify that the date falls within the specified range
    expect(parsedDate).toBeGreaterThanOrEqual(startDate);
    expect(parsedDate).toBeLessThanOrEqual(endDate);
  }
});
