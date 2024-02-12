export class Pagination {

    search: string = '';
    ordination: string = '';
    page: number = 0;
    size: number = 10;
    total: number = 0;
       
    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}