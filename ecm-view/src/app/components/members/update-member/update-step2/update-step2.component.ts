import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-step2',
  templateUrl: './update-step2.component.html',
  styleUrls: ['./update-step2.component.css']
})
export class UpdateStep2Component {

  @Input() 
  form!: FormGroup;
  
}