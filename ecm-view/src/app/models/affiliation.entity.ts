import { EntityBase } from "./entity-base.entity";

export class Affiliation extends EntityBase {

    public fatherName!: string;
    public motherName!: string;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}