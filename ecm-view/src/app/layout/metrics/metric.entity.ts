export class Metric {

    icon!: string;
    name!: string;
    value!: number;
    updatedAt!: any;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}