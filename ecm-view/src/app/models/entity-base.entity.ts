export abstract class EntityBase {
    
    public id!: number;
    public createdAt!: string;
    public updatedAt!: string;

    public constructor(values: Object = {}) { Object.assign(this, values) }
}