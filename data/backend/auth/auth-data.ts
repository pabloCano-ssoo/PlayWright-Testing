import {
    LoginRequest,
    RegisterRequest,
} from './auth-model';

export const AUTH_VALID_DATA = {
    register: {
        name: 'Pablo Tester',
        email: 'pablo.automation@example.test',
        password: 'Password123!',
    } satisfies RegisterRequest,

    login: {
        email: 'practice@testyard.dev',
        password: 'SecretPass1!',
    } satisfies LoginRequest,
};

export const AUTH_EXPECTED_DATA = {
    registerStatusCode: 201,
    loginStatusCode: 200,
    profileStatusCode: 200,
    unauthorizedStatusCode: 401,
};