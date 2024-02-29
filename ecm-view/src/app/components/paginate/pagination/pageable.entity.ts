export class Pageable {
    
    pageCurrent!: number;
    pageSize!: number;
    totalPages!: number;
    totalElements!: number;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}