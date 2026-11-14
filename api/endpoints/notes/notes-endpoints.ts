export const NOTE_ENDPOINTS = {
    GET_NOTES: '/api/notes',
    GET_NOTE_BY_ID: (id: number) => `/api/notes/${id}`,
    CREATE_NOTE: '/api/notes',
    UPDATE_NOTE: (id: number) => `/api/notes/${id}`,
    PATCH_NOTE: (id: number) => `/api/notes/${id}`,
    DELETE_NOTE: (id: number) => `/api/notes/${id}`,
};