import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html']
  ],
  use: {
    baseURL: 'https://apiv2-test.coordinadora.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'api-tests',
      testDir: './tests',
    },
  ],
}); 