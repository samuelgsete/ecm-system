export class Ordination {

    label!: string;
    name!: string;

    constructor(values: Object = {}) { 
        Object.assign(this, values) 
    }
}