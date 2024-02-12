import { Page } from "src/app/components/paginate/pagination/page.entity";
import { Pageable } from "src/app/components/paginate/pagination/pageable.entity";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {
    
    emptyData: boolean = false;
    searchNotFound: boolean = false;
    pageable!: Pageable;

    setPageable(currentPage: number, totalPages: number): void {
        const page = new Page({ label: currentPage, isCurrent: true });
        this.pageable = new Pageable({
            currentPage: page,
            totalPages: totalPages
        });
    }

    protected emptyOrNotFound(totalElements: number, search: string): void {
        this.emptyData = (totalElements == 0 && search.trim() == "") ? true : false;
        this.searchNotFound = (totalElements == 0 && search.trim() != "") ? true : false;
    }
   
    abstract run(pagination: Pagination): void;
}