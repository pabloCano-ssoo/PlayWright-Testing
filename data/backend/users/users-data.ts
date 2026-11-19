import { CreateUsersRequest, ReplaceUsersRequest, UpdateUsersRequest } from "../../backend/users/users-model";

export const UPDATE_USERS_DATA: UpdateUsersRequest = {
    job : "Architect"
};

export const CREATE_USERS_DATA: CreateUsersRequest = {
    name: "Nina QA",
    job: "Lead",
    email: "nina@example.test"
}

export const REPLACE_USERS_DATA: ReplaceUsersRequest = {
    name: "Nina QA",
    job: "Lead",
    email: "nina@example.test"
}
