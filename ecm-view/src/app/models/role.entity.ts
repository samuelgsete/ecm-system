import { EntityBase } from "./entity-base.entity";

export class Role extends EntityBase {

    name!: string;
    isSelected: boolean = false;
    numberOfMembers!: number;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}