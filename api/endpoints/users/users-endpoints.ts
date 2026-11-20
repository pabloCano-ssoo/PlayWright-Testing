export const USERS_ENDPOINTS = {
    GET_LIST_USERS: '/api/users',
    POST_CREATE_USER: '/api/users',
    GET_ONE_USER_ID: (id: number) => `/api/users/${id}`,
    PUT_REPLACE_USER_ID: (id: number) => `/api/users/${id}`,
    PATCH_PRODUCTS_WITH_ID: (id: number) => `/api/users/${id}`,
    DELETE_USER_WITH_ID: (id: number) => `/api/users/${id}`,
};
