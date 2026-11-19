export interface UpdateUsersRequest {
    job: string
}

export interface ReplaceUsersRequest {
    name: string,
    job: string,
    email: string
}

export interface CreateUsersRequest {
    name: string,
    job: string,
    email: string
}