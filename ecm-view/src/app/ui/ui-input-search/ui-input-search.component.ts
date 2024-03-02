import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'ui-input-search',
  templateUrl: './ui-input-search.component.html',
  styleUrls: ['./ui-input-search.component.css']
})
export class UiInputSearchComponent implements OnInit {

  @Input()
  search!: string;

  @Output() 
  keywordChange: EventEmitter<string> = new EventEmitter<string>();

  formSearch: FormControl = new FormControl('');

  handleClear(): void {
    this.formSearch.reset()
    this.keywordChange.emit('');
  }

  ngOnInit(): void {
    this.formSearch.patchValue(this.search);
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.keywordChange.emit(keyword);
    });
  }
}