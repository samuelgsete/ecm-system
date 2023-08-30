import { EntityBase } from "./entity-base.entity";

export class Role extends EntityBase {

    name!: string;
    numberOfMembers!: number;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}