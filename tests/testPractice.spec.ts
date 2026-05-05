import {test, expect} from '@playwright/test'

test('has input box', async ({page}) => {
    await page.goto('https://Google.com/');

    await expect(page.getByRole('combobox', {name: 'Search'})).toBeVisible();
})