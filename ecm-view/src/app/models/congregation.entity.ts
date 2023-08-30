import { EntityBase } from "./entity-base.entity";

export class Congregation extends EntityBase {

    name!: string;
    numberOfMembers!: number;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}