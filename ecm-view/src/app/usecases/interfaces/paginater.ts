import { Page } from "src/app/components/paginate/pagination/page.entity";
import { Pageable } from "src/app/components/paginate/pagination/pageable.entity";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {
    
    emptyData: boolean = false;
    searchNotFound: boolean = false;
    pageable!: Pageable;

    setPageable(_currentPage: number, _totalPages: number): void {
        this.pageable = new Pageable({
            currentPage: _currentPage,
            totalPages: _totalPages
        });
    }

    protected emptyOrNotFound(totalElements: number, search: string): void {
        this.emptyData = (totalElements == 0 && search.trim() == "") ? true : false;
        this.searchNotFound = (totalElements == 0 && search.trim() != "") ? true : false;
    }
   
    abstract run(pagination: Pagination): void;
}