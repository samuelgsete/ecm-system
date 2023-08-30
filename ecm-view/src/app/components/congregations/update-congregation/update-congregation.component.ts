import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Congregation } from 'src/app/models/congregation.entity';
import { UpdateCongregationService } from 'src/app/usecases/congregations/update-congregation.service';

@Component({
  selector: 'app-update-congregation',
  templateUrl: './update-congregation.component.html',
  styleUrls: ['./update-congregation.component.css']
})
export class UpdateCongregationComponent implements OnInit {
  
  protected form!: FormGroup;

  constructor(
    protected readonly _fb: FormBuilder,
    protected modalRef: MatDialogRef<UpdateCongregationComponent>,
    @Inject(MAT_DIALOG_DATA) protected congregation: Congregation,
    protected readonly update: UpdateCongregationService
  ) {}
  
  private buildForm(congregation: Congregation): FormGroup {
    return this._fb.group({
      id: [congregation.id],
      name: [congregation.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(64)]
      ],
      numberOfMembers: [congregation.numberOfMembers],
      createdAt: [congregation.createdAt],
      updatedAt: [congregation.updatedAt]
    })
  }

  ngOnInit(): void {
    this.form = this.buildForm(this.congregation);
    this.update.done().subscribe(response => {
      this.modalRef.close();
    })
  }
}