import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class Page {
  label: number = 0
  isCurrent: boolean = false
  isFirst: boolean = true
  isLast: boolean = false
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  pages: Page[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  changePage(nextPage: Page): void {
    this.router.navigate([], { 
      queryParams: { currentPage: nextPage.label },
      queryParamsHandling: 'merge'
    });
  }

  pageCurrent(): Page {
    return this.pages.filter(page => { return page.isCurrent })[0];
  }

  nextPage(): Page {
    let page = this.pageCurrent();
    let index = this.pages.indexOf(page);
    return this.pages[index + 1];
  }

  previousPage(): Page {
    let page = this.pageCurrent();
    let index = this.pages.indexOf(page);
    return this.pages[index - 1];
  }

  loadPagination(): void {
    this.route.queryParams.subscribe(params => {
      this.pages = []
      let currentPage = params['currentPage'] || 0 ;
      let numberOfPages = params['numberOfPages'] || 0;
      for(let i = 0; i < numberOfPages; i++) {
        this.pages.push({
          label: i,
          isCurrent: currentPage == i ? true : false,
          isFirst: i == 0 ? true: false,
          isLast: i == numberOfPages - 1 ? true: false
        })
      }
    })
  }

  ngOnInit(): void { this.loadPagination() }
}