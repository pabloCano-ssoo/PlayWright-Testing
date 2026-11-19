import { APIRequestContext } from '@playwright/test';
import { CreateUsersRequest, ReplaceUsersRequest, UpdateUsersRequest } from '../../../data/backend/users/users-model';
import { USERS_ENDPOINTS } from '../../endpoints/users/users-endpoints';



export class UsersApiService {

    constructor(private request: APIRequestContext) { }

    async listUsers() {
        return await this.request.get(USERS_ENDPOINTS.GET_LIST_USERS)
    }

    async createUser(body: CreateUsersRequest) {
        return await this.request.post(USERS_ENDPOINTS.POST_CREATE_USER, {
            data: body
        })
    }

    async getUser(id: number) {
        return await this.request.get(USERS_ENDPOINTS.GET_ONE_USER_ID(id))
    }

    async replaceUser(id: number, body: ReplaceUsersRequest) {
        return await this.request.put(USERS_ENDPOINTS.PUT_REPLACE_USER_ID(id), {
            data: body
        })
    }

    async updateUser(id: number, body: UpdateUsersRequest) {
        return await this.request.patch(USERS_ENDPOINTS.PATCH_PRODUCTS_WITH_ID(id), {
            data: body
        })
    }
    async deleteUser(id: number) {
        return await this.request.delete(USERS_ENDPOINTS.DELETE_USER_WITH_ID(id))
    }

}