export class Paginate {

    currentPage: number = 0
    totalElements: number = 0
    totalPages: number = 0
    
    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}