import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CreateCongregationService } from 'src/app/usecases/congregations/create-congregation.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-create-congregration',
  templateUrl: './create-congregration.component.html',
  styleUrls: ['./create-congregration.component.css']
})
export class CreateCongregrationComponent implements OnInit {

  protected form!: FormGroup;

  constructor(
    protected readonly router: Router,
    protected readonly _fb: FormBuilder,
    protected readonly modalRef: MatDialogRef<CreateCongregrationComponent>,
    protected readonly create: CreateCongregationService,
    protected readonly updateMetrics: DisplayMetricsService
  ) {}

  private buildForm(): FormGroup {
    return this._fb.group({
      id: [null],
      name: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(24)]
      ],
      numberOfMembers: [0],
      createdAt: [null],
      updatedAt: [null]
    })
  }

  ngOnInit(): void {
    this.form = this.buildForm();
    this.create.done().subscribe(response => {
      this.updateMetrics.run();
      this.modalRef.close()
    })
  }
}