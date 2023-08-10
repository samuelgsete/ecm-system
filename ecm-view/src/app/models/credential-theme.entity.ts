import { EntityBase } from "./entity-base.entity";

export class CredentialTheme extends EntityBase {

    name!: string
    primaryColor!: string
    template!: string
    urlPreviewTheme!: string
    isMain: boolean = false
    isActive: boolean = false

    constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}