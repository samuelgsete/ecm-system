import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BuildFormCreateFieldService } from 'src/app/usecases/fields/build-form-create-field.service';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css']
})
export class CreateFieldComponent implements OnInit {

  step1!: FormGroup;
  step2!: FormGroup;

  constructor(private readonly buildForm: BuildFormCreateFieldService) {}

  ngOnInit(): void {
    const { step1, step2 } = this.buildForm.run();
    this.step1 = step1;
    this.step2 = step2;
  }
}