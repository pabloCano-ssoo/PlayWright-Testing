
export const UTILITIES_ENDPOINTS = {
    GET_HEALTH: '/api/health',
    POST_RESET_SANDBOX: '/api/reset',
    GET_PUBLIC_IP: '/api/ip',
    GET_REQUEST_HEADERS: '/api/headers',

    GET_STATUS_CODE: (code: number) => `/api/status/${code}`,
    GET_DELAY: (ms: number) => `/api/delay/${ms}`,
    GET_FLAKY_REQUEST: '/api/flaky',

    POST_CREATE_JOB: '/api/jobs',
    GET_JOB_BY_ID: (id: number) => `/api/jobs/${id}`,

    GET_SEARCH: '/api/search',
    GET_PAGED_FEED: '/api/feed',
    GET_RANDOM_DATA: '/api/random',
    GET_REDIRECT: (n: number) => `/api/redirect/${n}`,

    GET_RATE_LIMIT_DEMO: '/api/rate-limit-demo',
    GET_ECHO: '/api/echo',

    GET_BASIC_AUTH: '/api/auth/basic',
    GET_SLOW_IMAGE: '/api/slow-image',
    GET_OPENAPI_SPEC: '/api/openapi.json',
};
