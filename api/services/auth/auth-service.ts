import { APIRequestContext } from '@playwright/test';
import {
    LoginRequest,
    RegisterRequest,
} from '../../../data/backend/auth/auth-model';
import { AUTH_ENDPOINTS } from '../../endpoints/auth/auth-endpoints';

export class AuthApiService {
    constructor(private request: APIRequestContext) { }

    async register(body: RegisterRequest) {
        return await this.request.post(AUTH_ENDPOINTS.REGISTER, {
            data: body,
        });
    }

    async login(body: LoginRequest) {
        return await this.request.post(AUTH_ENDPOINTS.LOGIN, {
            data: body,
        });
    }

    async getProfile(token: string) {
        return await this.request.get(AUTH_ENDPOINTS.PROFILE, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async logout(token: string) {
        return await this.request.post(AUTH_ENDPOINTS.LOGOUT, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}