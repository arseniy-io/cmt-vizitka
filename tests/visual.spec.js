import { test } from '@playwright/test';

const shots = [
  { name: 'desktop', width: 1920, height: 1080, file: 'screenshots/local-desktop.png' },
  { name: 'tablet-768', width: 768, height: 1024, file: 'screenshots/local-tablet-768.png' },
  { name: 'mobile-430', width: 430, height: 932, file: 'screenshots/local-mobile-430.png' },
  { name: 'mobile-390', width: 390, height: 844, file: 'screenshots/local-mobile-390.png' },
];

for (const shot of shots) {
  test(`${shot.name} screenshot`, async ({ page }) => {
    await page.setViewportSize({ width: shot.width, height: shot.height });
    await page.goto('http://localhost:5173', { waitUntil: 'load' });
    await page.waitForTimeout(800);

    await page.screenshot({
      path: shot.file,
      fullPage: true,
    });
  });
}
