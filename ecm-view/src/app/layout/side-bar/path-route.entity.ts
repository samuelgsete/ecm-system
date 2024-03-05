export class PathRoute {

    icon!: string
    path!: string
    name!: string
    title!: string;

    public constructor(values: Object = {}) { 
        Object.assign(this, values)
    }
}