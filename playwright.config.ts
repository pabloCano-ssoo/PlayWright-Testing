
import { defineConfig, devices } from '@playwright/test';

const BASE_URL = 'https://testyard.onrender.com';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',
    retries: process.env.CI ? 2 : 0,
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    use: {
        baseURL: BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        // FRONTEND
        {
            name: 'frontend-chromium',
            testMatch: '**/frontend/**/*.spec.ts',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'frontend-firefox',
            testMatch: '**/frontend/**/*.spec.ts',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name: 'frontend-webkit',
            testMatch: '**/frontend/**/*.spec.ts',
            use: {
                ...devices['Desktop Safari'],
            },
        },

        // BACKEND
        {
            name: 'backend',
            testMatch: '**/backend/**/*.spec.ts',
            workers: 1,
            use: {
                baseURL: BASE_URL,
                extraHTTPHeaders: {
                    'X-Sandbox': 'playwright-automation-tests',
                },
            },
        },

        // INTEGRATION
        {
            name: 'integration',
            testMatch: '**/integration/**/*.spec.ts',
            use: {
                ...devices['Desktop Chrome'],
                baseURL: BASE_URL,
            },
        },
    ],
});
