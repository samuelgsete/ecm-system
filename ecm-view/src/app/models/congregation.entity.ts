import { EntityBase } from "./entity-base.entity";

export class Congregation extends EntityBase {

    name!: string;
    numberOfMembers!: number;
    isSelected: boolean = false;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}