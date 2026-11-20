import { APIRequestContext } from '@playwright/test';
import { NOTE_ENDPOINTS } from '../../endpoints/notes/notes-endpoints';

import {
    CreateNoteRequest,
    PatchNoteRequest,
    UpdateNoteRequest,
} from '../../../data/backend/notes/note-model';

export class NoteApiService {
    constructor(private request: APIRequestContext) { }

    async getNotes(token: string) {
        return await this.request.get(NOTE_ENDPOINTS.GET_NOTES, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async getNoteById(id: number, token: string) {
        return await this.request.get(NOTE_ENDPOINTS.GET_NOTE_BY_ID(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async createNote(body: CreateNoteRequest, token: string) {
        return await this.request.post(NOTE_ENDPOINTS.CREATE_NOTE, {
            data: body,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async updateNote(id: number, body: UpdateNoteRequest, token: string) {
        return await this.request.put(NOTE_ENDPOINTS.UPDATE_NOTE(id), {
            data: body,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async patchNote(id: number, body: PatchNoteRequest, token: string) {
        return await this.request.patch(NOTE_ENDPOINTS.PATCH_NOTE(id), {
            data: body,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async deleteNote(id: number, token: string) {
        return await this.request.delete(NOTE_ENDPOINTS.DELETE_NOTE(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}