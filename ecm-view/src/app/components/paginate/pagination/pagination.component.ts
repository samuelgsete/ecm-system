import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pageable } from './pageable.entity';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
   
  @Output() changeSize: EventEmitter<number> = new EventEmitter<number>();
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() pageable: Pageable = new Pageable();
  @Input() isVisible: boolean = true;

  differentSizes: number[] = [2, 5, 10, 15, 25, 30];
  formSize: FormControl = new FormControl();

  currentPage: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  size: number = 0;
  firstPage: number = 0;
  lastPage: number = 0;
  
  handleNextPage(): void {
    const nextPage = this.pageable.pageCurrent + 1;
    this.changePage.emit(nextPage);
  }

  handlePreviousPage(): void {
    const previousPage = this.pageable.pageCurrent - 1;
    this.changePage.emit(previousPage);
  }

  handleFirstPage(): void {
    const firstPage = 0;
    this.changePage.emit(firstPage);
  }

  handleLastPage(): void {
    const lastPage = this.pageable.totalPages - 1;
    this.changePage.emit(lastPage);
  }

  handleSize(size: number): void {
    this.changeSize.emit(size);
  }

  ngOnInit(): void {
    this.formSize.patchValue(this.pageable.pageSize);
  }
}