export class CountElements {

    totalElements: number = 0;
    totalSelected: number = 0;
    everyoneIsSelected: boolean = false;
    notEveryoneIsSelected: boolean = false;

    constructor(values: Object = {}) { 
        Object.assign(this, values)
    }
}