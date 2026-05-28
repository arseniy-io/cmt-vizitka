import { test } from '@playwright/test';

const shots = [
  { name: 'desktop', width: 1920, height: 1080, file: 'screenshots/local-desktop.png' },
  { name: 'tablet', width: 768, height: 1024, file: 'screenshots/local-tablet.png' },
  { name: 'mobile', width: 390, height: 844, file: 'screenshots/local-mobile.png' },
];

for (const shot of shots) {
  test(`${shot.name} screenshot`, async ({ page }) => {
    await page.setViewportSize({ width: shot.width, height: shot.height });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    await page.screenshot({
      path: shot.file,
      fullPage: true,
    });
  });
}
