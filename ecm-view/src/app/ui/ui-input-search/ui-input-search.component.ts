import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'ui-input-search',
  templateUrl: './ui-input-search.component.html',
  styleUrls: ['./ui-input-search.component.css']
})
export class UiInputSearchComponent implements OnInit {
  
  @Input() search: string = '';

  formSearch: FormControl = new FormControl('');
  
  @Output() 
  keywordChange: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    this.formSearch.patchValue(this.search);
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.keywordChange.emit(keyword);
    });
  }
}