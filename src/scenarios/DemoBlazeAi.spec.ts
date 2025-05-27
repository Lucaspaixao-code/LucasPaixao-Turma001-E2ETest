import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  const aiArgs = { page, test };
  await ai('Click in Log in', aiArgs);
  await ai('Click in Username field', aiArgs);
  await ai('fill with a random name', aiArgs);
  await ai('Click in Password field', aiArgs);
  await ai('fill with a random passaword', aiArgs);
  await ai('Click in log in inside the form', aiArgs);
});
