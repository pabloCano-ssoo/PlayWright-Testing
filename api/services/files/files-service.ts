import { APIRequestContext } from '@playwright/test';
import type { Buffer } from 'buffer';
import { FILES_ENDPOINTS } from "../../endpoints/files/files-endpoints";

export class FilesApiService {

    constructor(private request: APIRequestContext) { }

    async downloadFiles(filesName: string) {
        return await this.request.get(FILES_ENDPOINTS.GET_DOWNLOAD_FILE(filesName));
    }

    async uploadFiles(file: { name: string; mimeType: string; buffer: Buffer }) {
        return await this.request.post(FILES_ENDPOINTS.POST_UPLOAD_FILE, {
            multipart: {
                file,
            },
        });
    }

}
