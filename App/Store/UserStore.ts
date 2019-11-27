import { User } from "../Model/User";
import { observable, action, ObservableMap } from "mobx";
import { MainStore } from './MainStore';
import userApi from "../Services/UserApi";
import { createContext } from "react";
import { Repository } from "../Model/Repository";

export class UserStore extends MainStore {
    @observable users: ObservableMap<string, User>
    @observable userRepositories: Repository[]
    @observable search?: string
    @observable userName?: string
    @observable page: number
    @observable isCompleted: boolean

    constructor() {
        super()
        this.users = observable.map({})
        this.page = 0
        this.isCompleted = false
    }

    @action async refreshSearch() {
        this.page = 0
        this.users = observable.map({})
        this.isCompleted = false
        this.searchUsers()
    }

    @action async searchUsers() {
        this.isLoading = true
        const response = await userApi.searchUsers(this.search, this.page)
        this.isLoading = false
        if (response.ok) {
            response.data.items.forEach(user => {
                this.users.set(user.id.toString(), user)
            })
            if (response.data.total_count === 0 || response.data.total_count === this.users.size) {
                this.isCompleted = true
            }
        }
        return response
    }

    @action async searhUserRepository() {
        this.isLoading = true
        const response = await userApi.userRepository(this.userName)
        this.isLoading = false
        if (response.ok) {
            this.userRepositories = response.data
        }
        return response
    }
}

export const userStore = new UserStore()
export const userStoreContext = createContext(userStore)


