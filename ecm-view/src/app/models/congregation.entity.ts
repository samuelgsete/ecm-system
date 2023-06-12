import { EntityBase } from "./entity-base.entity";

export class Congregation extends EntityBase {

    public name!: string;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}