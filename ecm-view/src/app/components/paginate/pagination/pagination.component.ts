import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PaginationService } from './pagination.service';
import { Page } from './page.entity';
import { Paginate } from 'src/app/models/paginate.entity';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    
  pages: Page[] = []
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    readonly pagination: PaginationService
  ) {}

  onChangePage(nextPage: Page): void {
    this.changePage.emit(nextPage)
  }

  renderPagination(paginate: Paginate): void {
    const totalPages = paginate.totalPages
    const currentPage = paginate.currentPage
    for(let i = 0; i < totalPages; i++) {
      this.pages.push({
        label: i,
        isCurrent: currentPage == i ? true : false
      })
    }
  }

  ngOnInit(): void {
    this.pagination.onRender().subscribe(paginate => {
      this.pages = []
      this.renderPagination(paginate)
    })
  }
}