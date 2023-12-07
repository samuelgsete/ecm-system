import { EntityBase } from "./entity-base.entity";
import { ImageModel } from "./image-model.entity";

export class Shepherd extends EntityBase {

    name!: string;
    signature!: ImageModel;
    location!: string;

    constructor(values: Object = {}) { 
        super(); Object.assign(this, values);
    }
}