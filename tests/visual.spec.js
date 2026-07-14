import { test } from '@playwright/test';

import { expect } from '@playwright/test';

const shots = [
  { name: 'desktop', width: 1920, height: 1080, file: 'screenshots/local-desktop.png' },
  { name: 'tablet-768', width: 768, height: 1024, file: 'screenshots/local-tablet-768.png' },
  { name: 'mobile-430', width: 430, height: 932, file: 'screenshots/local-mobile-430.png' },
  { name: 'mobile-390', width: 390, height: 844, file: 'screenshots/local-mobile-390.png' },
];

async function revealWholePage(page) {
  await page.evaluate(async () => {
    const wait = (timeout) => new Promise((resolve) => window.setTimeout(resolve, timeout));
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const step = Math.max(320, Math.floor(window.innerHeight * 0.7));

    for (let position = 0; position < maxScroll; position += step) {
      window.scrollTo(0, position);
      await wait(70);
    }

    window.scrollTo(0, maxScroll);
    await wait(140);
  });

  await expect
    .poll(() => page.locator('[data-reveal]:not(.is-revealed)').count())
    .toBe(0);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
}

for (const shot of shots) {
  test(`${shot.name} screenshot`, async ({ page }) => {
    await page.setViewportSize({ width: shot.width, height: shot.height });
    await page.goto('http://localhost:5173', { waitUntil: 'load' });
    await page.waitForTimeout(800);

    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.locator('.service-card')).toHaveCount(10);

    const pageWidth = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(pageWidth.scrollWidth).toBeLessThanOrEqual(pageWidth.clientWidth);

    await revealWholePage(page);

    const brandImages = page.locator('.brand-card img');
    await expect(brandImages).toHaveCount(6);
    await expect.poll(() =>
      brandImages.evaluateAll((images) =>
        images.every((image) => image.complete && image.naturalWidth > 0)
      )
    ).toBe(true);

    await page.screenshot({
      path: shot.file,
      fullPage: true,
    });

    const firstService = page.locator('.service-card').first();
    const firstServiceTrigger = firstService.locator('.service-card__trigger');
    const cardPositionsBefore = await page.locator('.service-card').evaluateAll((cards) =>
      cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return { x: rect.x + window.scrollX, y: rect.y + window.scrollY };
      })
    );

    await firstServiceTrigger.click();
    await expect(firstServiceTrigger).toHaveAccessibleName(
      'Скрыть: Проектирование и техническая подготовка'
    );

    if (shot.width > 1180) {
      await expect(page.locator('.service-details-panel--active')).toBeVisible();

      const cardPositionsAfter = await page.locator('.service-card').evaluateAll((cards) =>
        cards.map((card) => {
          const rect = card.getBoundingClientRect();
          return { x: rect.x + window.scrollX, y: rect.y + window.scrollY };
        })
      );

      cardPositionsAfter.forEach((position, index) => {
        expect(Math.abs(position.x - cardPositionsBefore[index].x)).toBeLessThan(1);
        expect(Math.abs(position.y - cardPositionsBefore[index].y)).toBeLessThan(1);
      });

      const closeDetails = page.getByRole('button', { name: 'Скрыть подробности' });
      await closeDetails.focus();
      await closeDetails.press('Enter');
    } else {
      await expect(firstService.locator('.service-card-details--inline')).toBeVisible();

      const closeDetails = firstService.getByRole('button', { name: 'Скрыть', exact: true });
      await closeDetails.focus();
      await closeDetails.press('Enter');
    }

    await expect(firstServiceTrigger).toBeFocused();
    await expect(firstService).not.toHaveClass(/service-card--active/);

  });
}

test('content reveals once it enters the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://localhost:5173', { waitUntil: 'load' });

  const target = page.locator('.audience-title');

  await expect(page.locator('html')).toHaveClass(/reveal-ready/);
  await expect(target).not.toHaveClass(/is-revealed/);
  await expect.poll(() => target.evaluate((element) => getComputedStyle(element).opacity)).toBe('0');

  await target.scrollIntoViewIfNeeded();

  await expect(target).toHaveClass(/is-revealed/);
  await expect.poll(() => target.evaluate((element) => getComputedStyle(element).opacity)).toBe('1');
});

test('reduced motion keeps all content visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('http://localhost:5173', { waitUntil: 'load' });

  const revealTargets = page.locator('[data-reveal]');

  await expect(revealTargets.first()).toHaveClass(/is-revealed/);
  expect(
    await revealTargets.evaluateAll((elements) =>
      elements.every((element) => getComputedStyle(element).opacity === '1')
    )
  ).toBe(true);
});

test('desktop service details remain usable on a short screen', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 600 });
  await page.goto('http://localhost:5173', { waitUntil: 'load' });

  const firstServiceTrigger = page.locator('.service-card__trigger').first();
  await firstServiceTrigger.click();

  const detailsPanel = page.locator('.service-details-panel--active');
  const panelBox = await detailsPanel.boundingBox();

  expect(panelBox).not.toBeNull();
  expect(panelBox.height).toBeLessThanOrEqual(552);

  const closeDetails = page.getByRole('button', { name: 'Скрыть подробности' });
  await closeDetails.scrollIntoViewIfNeeded();
  await expect(closeDetails).toBeInViewport();
  await closeDetails.focus();
  await closeDetails.press('Enter');
  await expect(firstServiceTrigger).toBeFocused();
});
