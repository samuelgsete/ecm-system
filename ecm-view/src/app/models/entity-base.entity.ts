export abstract class EntityBase {
    
    id!: string;
    createdAt!: string;
    updatedAt!: string;

    constructor(values: Object = {}) { Object.assign(this, values) }
}