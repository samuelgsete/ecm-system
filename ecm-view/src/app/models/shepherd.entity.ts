import { EntityBase } from "./entity-base.entity";
import { ImageModel } from "./image-model.entity";

/*
    Modelo de Entidade que represente
    um pastor presidente de um campo
*/
export class Shepherd extends EntityBase {

    name!: string;
    signature!: ImageModel;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}