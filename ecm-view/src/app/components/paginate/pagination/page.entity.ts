export class Page {

    label: number = 0
    isCurrent: boolean = false
    isFirst: boolean = false
    isLast: boolean = false
    
    public constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}