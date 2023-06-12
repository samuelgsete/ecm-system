import { EntityBase } from "./entity-base.entity";

export class Role extends EntityBase {

    public name!: string;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}