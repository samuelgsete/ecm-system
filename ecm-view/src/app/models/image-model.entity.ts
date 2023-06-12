import { EntityBase } from "./entity-base.entity";

export class ImageModel extends EntityBase {
    
    name!: string
    publicId!: string
    url!: string
    urlTransformed!: string
    width!: number
    height!: number
    size!: number
    format!: string
    uploadedAt!: string

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}