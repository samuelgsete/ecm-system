import { Page } from "./page.entity";

export class Pageable {
    
    currentPage!: number;
    totalPages!: number;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}