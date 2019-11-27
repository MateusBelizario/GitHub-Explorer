import { ApiResponse } from "apisauce";
import { Pagination } from '../Model/Pagination';
import { User } from "../Model/User";
import { Repository } from "../Model/Repository";
import apiInstance from './Api'

const getUsers = (): Promise<ApiResponse<Pagination<User>>> => {
    return apiInstance.get('users/', {
        client_id: '61af32f1fbaa8f49a5f8',
        client_secret: '124efffac2551b7ee0385469f391b82ac37d241d'
    })
}
const searchUsers = (query: string, page: number): Promise<ApiResponse<Pagination<User>>> => {

    return apiInstance.get('search/users', {
        q: query ? query : 'mateusBelizario',
        page: page,
        per_page: 10,
        client_id: '61af32f1fbaa8f49a5f8',
        client_secret: '124efffac2551b7ee0385469f391b82ac37d241d'
    })
}

const searchUserRepository = (userName: string): Promise<ApiResponse<Repository[]>> => {
    return apiInstance.get('users/' + userName + '/repos', {
        client_id: '61af32f1fbaa8f49a5f8',
        client_secret: '124efffac2551b7ee0385469f391b82ac37d241d'
    })
}

const userApi = {
    getUsers: getUsers,
    searchUsers: searchUsers,
    userRepository: searchUserRepository
}

export default userApi