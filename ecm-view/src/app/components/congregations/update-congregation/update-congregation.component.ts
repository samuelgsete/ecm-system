import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Congregation } from 'src/app/models/congregation.entity';
import { BuildFormCongregation } from 'src/app/usecases/congregations/build-form-congregation.service';
import { IFormCongregation } from 'src/app/usecases/congregations/interfaces/form-congregation.interface';
import { UpdateCongregationService } from 'src/app/usecases/congregations/update-congregation.service';

@Component({
  selector: 'app-update-congregation',
  templateUrl: './update-congregation.component.html',
  styleUrls: ['./update-congregation.component.css']
})
export class UpdateCongregationComponent implements OnInit {
  
  protected form!: FormGroup<IFormCongregation>;

  constructor(
    protected readonly _fb: FormBuilder,
    protected modalRef: MatDialogRef<UpdateCongregationComponent>,
    @Inject(MAT_DIALOG_DATA) protected congregation: Congregation,
    protected readonly buildForm: BuildFormCongregation,
    protected readonly update: UpdateCongregationService
  ) {}

  get controls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.buildForm.run(this.congregation);
    this.update.done().subscribe(response => {
      this.modalRef.close();
    })
  }
}