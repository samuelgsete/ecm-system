export class Cropped {

    width!: number
    height!: number
    positionX1!: number
    positionY1!: number

    constructor(values: Object = {}) { 
        Object.assign(this, values) 
    }
}