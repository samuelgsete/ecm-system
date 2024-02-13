import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Page } from './page.entity';
import { Pageable } from './pageable.entity';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    
  @Output() changePage: EventEmitter<Page> = new EventEmitter<Page>()
  @Input() pageable: Pageable = new Pageable();
  pages: Page[] = [];
  MAX_PAGES_VISIBLE = 8;

  onChangePage(nextPage: Page): void {
    let currentPage = this.getCurrentPage();
    currentPage.isCurrent = false;
    nextPage.isCurrent = true;
    this.changePage.emit(nextPage);
  }

  protected getCurrentPage(): Page {
    return this.pages.filter(page => page.isCurrent)[0];
  }

  render(): void {
    const totalPages = this.pageable.totalPages;
    const currentPage = this.pageable.currentPage;
    this.pages = Array.from({ length: totalPages }).map((item, index) => {
      return new Page({
        name: index  + 1,
        value: index,
        isCurrent: currentPage == index ? true : false,
        isHidden: index < this.MAX_PAGES_VISIBLE ? false : true
      })
    })
  }

  ngOnInit(): void {
    this.render();
  }
}