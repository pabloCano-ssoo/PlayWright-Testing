
import { APIRequestContext } from '@playwright/test';
import {
    EchoRequest,
    FeedQueryParams,
    StartBackgroundJobRequest
} from '../../../data/backend/utilities/utilities-model';
import { UTILITIES_ENDPOINTS } from '../../endpoints/utilities/utilities-endpoints';

export class UtilitiesApiService {

    constructor(private request: APIRequestContext) { }

    async getHealth() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_HEALTH);
    }

    async resetSandbox() {
        return await this.request.post(UTILITIES_ENDPOINTS.POST_RESET_SANDBOX);
    }

    async getPublicIp() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_PUBLIC_IP);
    }

    async getRequestHeaders() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_REQUEST_HEADERS);
    }

    async getStatusCode(code: number) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_STATUS_CODE(code));
    }

    async getDelay(ms: number) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_DELAY(ms));
    }

async getFlakyRequest(failRate?: number) {
    return await this.request.get(UTILITIES_ENDPOINTS.GET_FLAKY_REQUEST, {
        params: failRate !== undefined ? { failRate } : undefined
    });
}

    async createJob(body: StartBackgroundJobRequest) {
        return await this.request.post(UTILITIES_ENDPOINTS.POST_CREATE_JOB, {
            data: body
        });
    }

    async getJob(id: number) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_JOB_BY_ID(id));
    }

    async search(query: string) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_SEARCH, {
            params: { q: query }
        });
    }

async getPagedFeed(params: FeedQueryParams) {
    return await this.request.get(UTILITIES_ENDPOINTS.GET_PAGED_FEED, {
        params: {
            page: params.page,
            size: params.size,
            ...(params.delay !== undefined && { delay: params.delay })
        }
    });
}

    async getRandomData() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_RANDOM_DATA);
    }

    async getRedirect(n: number) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_REDIRECT(n));
    }

    async getRateLimitDemo() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_RATE_LIMIT_DEMO);
    }

    async getEcho(params?: Record<string, string | number | boolean>) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_ECHO, {
            params
        });
    }

    async postEcho(body: EchoRequest) {
        return await this.request.post(UTILITIES_ENDPOINTS.GET_ECHO, {
            data: body
        });
    }

    async putEcho(body: EchoRequest) {
        return await this.request.put(UTILITIES_ENDPOINTS.GET_ECHO, {
            data: body
        });
    }

    async patchEcho(body: EchoRequest) {
        return await this.request.patch(UTILITIES_ENDPOINTS.GET_ECHO, {
            data: body
        });
    }

    async deleteEcho(body?: EchoRequest) {
        return await this.request.delete(UTILITIES_ENDPOINTS.GET_ECHO, {
            data: body
        });
    }

    async getBasicAuth(username: string, password: string) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_BASIC_AUTH);
    }

    async getSlowImage(ms?: number) {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_SLOW_IMAGE, {
            params: ms !== undefined ? { ms } : undefined
        });
    }

    async getOpenApiSpec() {
        return await this.request.get(UTILITIES_ENDPOINTS.GET_OPENAPI_SPEC);
    }

}

