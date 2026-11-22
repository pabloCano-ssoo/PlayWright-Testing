import { expect, test } from '@playwright/test';
import { Buffer } from 'buffer';
import { FilesApiService } from '../../api/services/files/files-service';

const downloadCases = [
    { title: 'TC-001: Downloads a sample file', fileName: 'sample.csv', status: 200 },
    { title: 'TC-002: Returns 404 for a missing file', fileName: 'missing-file.csv', status: 404 },
    { title: 'TC-003: Downloads a sample JSON file', fileName: 'sample.json', status: 200 },
    { title: 'TC-004: Downloads a sample text file', fileName: 'sample.txt', status: 200 },
];

for (const { title, fileName, status } of downloadCases) {
    test(title, async ({ request }) => {
        const filesApi = new FilesApiService(request);
        const response = await filesApi.downloadFiles(fileName);

        expect(response.status()).toBe(status);
    });
}

test('TC-005: Uploads a file and returns its metadata', async ({ request }) => {
    const filesApi = new FilesApiService(request);
    const file = {
        name: 'playwright-upload.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Playwright file upload'),
    };

    const response = await filesApi.uploadFiles(file);
    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.data.files).toContainEqual(expect.objectContaining({
        field: 'file',
        filename: file.name,
        contentType: file.mimeType,
        size: file.buffer.length,
    }));
});

test('TC-006: Rejects a file larger than 1 MB', async ({ request }) => {
    const filesApi = new FilesApiService(request);
    const response = await filesApi.uploadFiles({
        name: 'too-large.txt',
        mimeType: 'text/plain',
        buffer: Buffer.alloc(1024 * 1024 + 1),
    });

    expect(response.status()).toBe(400);
});

test('TC-007: Rejects a multipart request without a file', async ({ request }) => {
    const response = await request.post('/api/upload', {
        multipart: {
            description: 'This form does not contain a file',
        },
    });

    expect(response.status()).toBe(400);
});

test('TC-008: Rejects a request that is not multipart', async ({ request }) => {
    const response = await request.post('/api/upload');

    expect(response.status()).toBe(415);
});