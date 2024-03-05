export class UserLogged {

    name!: string;
    email!: string;
    username!: string;

    constructor(values: Object = {}) { 
        Object.assign(this, values) 
    }
}