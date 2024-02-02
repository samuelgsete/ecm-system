import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { BuildFormCongregation } from 'src/app/usecases/congregations/build-form-congregation.service';
import { CreateCongregationService } from 'src/app/usecases/congregations/create-congregation.service';
import { IFormCongregation } from 'src/app/usecases/congregations/interfaces/form-congregation.interface';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';

@Component({
  selector: 'app-create-congregration',
  templateUrl: './create-congregration.component.html',
  styleUrls: ['./create-congregration.component.css']
})
export class CreateCongregrationComponent implements OnInit {

  protected form!: FormGroup<IFormCongregation>;

  constructor(
    protected readonly router: Router,
    protected readonly modalRef: MatDialogRef<CreateCongregrationComponent>,
    protected readonly buildForm: BuildFormCongregation,
    protected readonly create: CreateCongregationService,
    protected readonly updateMetrics: DisplayMetricsService
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm.run(null);
    this.create.done().subscribe(response => {
      this.updateMetrics.run();
      this.modalRef.close()
    })
  }
}