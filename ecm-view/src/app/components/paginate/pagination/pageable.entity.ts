import { Page } from "./page.entity";

export class Pageable {
    
    currentPage!: Page;
    totalPages!: number;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}