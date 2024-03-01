import { EntityBase } from "./entity-base.entity";

export class CredentialTheme extends EntityBase {

    name!: string
    template!: string
    urlPreview!: string
    isActive: boolean = false
    rating: number = 0
    isFavorite: boolean = false;

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}