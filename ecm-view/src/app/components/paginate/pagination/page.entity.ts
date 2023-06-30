export class Page {

    label: number = 0
    isCurrent: boolean = false
       
    public constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}