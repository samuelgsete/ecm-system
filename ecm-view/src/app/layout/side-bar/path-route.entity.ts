export class PathRoute {

    icon!: string
    path!: string
    name!: string

    public constructor(values: Object = {}) { 
        Object.assign(this, values)
    }
}