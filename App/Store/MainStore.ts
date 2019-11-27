import { User } from "../Model/User";
import { observable, action } from "mobx";

export class MainStore {
    @observable isLoading: boolean
    constructor() {
        this.isLoading = false
    }
}

