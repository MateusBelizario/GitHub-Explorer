import { UserStore, userStore } from "./UserStore";

export class RootStore {
    private userStore?: UserStore

    constructor() {
        this.userStore = userStore
    }
}

export const rootStore = new RootStore()