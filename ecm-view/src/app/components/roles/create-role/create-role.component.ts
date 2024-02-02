import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { BuildFormRole } from 'src/app/usecases/roles/build-form-role.service';
import { CreateRoleService } from 'src/app/usecases/roles/create-role.service';
import { IFormRole } from 'src/app/usecases/roles/interfaces/form-role.interface';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  protected form!: FormGroup<IFormRole>;

  constructor(
    protected readonly router: Router,
    protected readonly modalRef: MatDialogRef<CreateRoleComponent>,
    protected readonly buildForm: BuildFormRole,
    protected readonly createRole: CreateRoleService,
    protected readonly updateMetrics: DisplayMetricsService
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm.run(null);
    this.createRole.done().subscribe(response => {
      this.updateMetrics.run();
      this.modalRef.close();
    });
  }
}