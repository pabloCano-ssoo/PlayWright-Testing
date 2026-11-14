import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'frontend',
      testMatch: '**/frontend/**/*.spec.ts'
    },
    {
      name: 'backend',
      testMatch: '**/backend/**/*.spec.ts',
      use: {
        baseURL: 'https://testyard.onrender.com',
        extraHTTPHeaders: {
          'X-Sandbox': 'playwright-automation-tests',
        },
      },
    },
    {
      name: 'integration',
      testMatch: '**/integration/**/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: "",
      },
    },
  ]
})
