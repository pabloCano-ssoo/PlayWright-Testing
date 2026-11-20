import { APIRequestContext } from '@playwright/test';
import { FILES_ENDPOINTS } from "../../endpoints/files/files-endpoints";

export class FilesApiService {

    constructor(private request: APIRequestContext) { }

    async downloadFiles(token: string, filesName: string) {
        return await this.request.get(FILES_ENDPOINTS.GET_DOWNLOAD_FILE(filesName))

    }

    async uploadFiles(token: string) {
        return await this.request.post(FILES_ENDPOINTS.POST_UPLOAD_FILE)
    }

}
