import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Page } from './page.entity';
import { Pageable } from './pageable.entity';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>()
  @Input() pageable: Pageable = new Pageable();
  pages: Page[] = [];

  onChangePage(nextPage: Page): void {
    let currentPage = this.getCurrentPage();
    currentPage.isCurrent = false;
    nextPage.isCurrent = true;
    this.changePage.emit(nextPage)
    
  }

  protected getCurrentPage(): Page {
    return this.pages.filter(page => page.isCurrent)[0];
  }

  render(): void {
    const totalPages = this.pageable.totalPages;
    const currentPage = this.pageable.currentPage;
    for(let i = 0; i < totalPages; i++) {
      this.pages.push({
        label: i,
        isCurrent: currentPage.label == i ? true : false,
      })
    }
  }

  ngOnInit(): void {
    this.render();    
  }
}