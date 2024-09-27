import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('home page has expected title', async ({ page }) => {
	await page.goto('/svelte-is-cool');
	expect(await page.title()).toBe('Svelte is cool');
}