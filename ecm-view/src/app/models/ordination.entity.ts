export class Ordination {

    label!: string;
    name!: string;
    isActive: boolean = false;

    constructor(values: Object = {}) { 
        Object.assign(this, values) 
    }
}