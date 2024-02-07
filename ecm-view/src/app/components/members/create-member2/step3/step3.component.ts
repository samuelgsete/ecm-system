import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFormMemberStep3 } from 'src/app/usecases/members/interfaces/form-member-step3.interface';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component {

  @Input('form') public form!: FormGroup<IFormMemberStep3>;

}