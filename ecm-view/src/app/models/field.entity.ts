import { EntityBase } from "./entity-base.entity";
import { ImageModel } from "./image-model.entity";
import { Shepherd } from "./shepherd.entity";
/*
    Campo em que um pastor devidamente
    autorizado exerce suas funções pastorais
*/
export class Field extends EntityBase  {

    name!: string;
    logo!: ImageModel;
    shepherd!: Shepherd;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}