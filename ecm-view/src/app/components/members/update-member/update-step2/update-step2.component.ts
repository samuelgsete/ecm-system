import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-step2',
  templateUrl: './update-step2.component.html',
  styleUrls: ['./update-step2.component.css']
})
export class UpdateStep2Component implements AfterViewInit {
  
  @ViewChild('email') emailInput!: ElementRef

  @Input() 
  form!: FormGroup;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.emailInput);
    this.emailInput.nativeElement.focus();
  }
}