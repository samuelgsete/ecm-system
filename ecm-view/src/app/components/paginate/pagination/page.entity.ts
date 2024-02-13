export class Page {

    name: number = 0;
    value: number = 0;
    isCurrent: boolean = false;
    isHidden: boolean = true;
   
    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}