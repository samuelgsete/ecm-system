import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Pageable } from "src/app/components/paginate/pagination/pageable.entity";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class IPaginater {
    
    emptyData: boolean = false;
    searchNotFound: boolean = false;
    pageable!: Pageable;
    private router = inject(Router);
   
    setPageable(
        _pageCurrent: number, 
        _pageSize: number,
        _totalPages: number, 
        _totalElements: number
    ): void 
    {
        this.pageable = new Pageable({
            pageCurrent: _pageCurrent,
            pageSize: _pageSize,
            totalPages: _totalPages,
            totalElements: _totalElements
        });
    }

    setParamsURL(
        _search: string,
        _ordination: string,
        _currentPage: number,
        _page_size: number
    ): void 
    {
        this.router.navigate([], { queryParams: {
            search: _search,
            ordination: _ordination,
            page_number: _currentPage,
            page_size: _page_size
        }})
    }

    protected emptyOrNotFound(totalElements: number, search: string): void {
        this.emptyData = (totalElements == 0 && search.trim() == "") ? true : false;
        this.searchNotFound = (totalElements == 0 && search.trim() != "") ? true : false;
    }
   
    abstract run(pagination: Pagination): void;
}