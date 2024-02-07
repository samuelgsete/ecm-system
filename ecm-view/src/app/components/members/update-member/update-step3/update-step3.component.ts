import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormMemberStep3 } from 'src/app/usecases/members/interfaces/form-member-step3.interface';

@Component({
  selector: 'app-update-step3',
  templateUrl: './update-step3.component.html',
  styleUrls: ['./update-step3.component.css']
})
export class UpdateStep3Component {
  
  @Input()
  form!: FormGroup<IFormMemberStep3>;
}