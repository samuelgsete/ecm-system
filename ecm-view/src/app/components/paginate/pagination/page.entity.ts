export class Page {

    label: number = 0;
    isCurrent: boolean = false;
   
    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}