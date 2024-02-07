import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFormMemberStep2 } from 'src/app/usecases/members/interfaces/form-member-step2.interface';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {

  @Input() public form!: FormGroup<IFormMemberStep2>;

}