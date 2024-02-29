export class Pagination {

    search: string = '';
    ordination: string = '';
    pageCurrent: number = 0;
    pageSize: number = 10;
    totalPages: number = 0;
    totalElements: number = 0;
       
    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}