import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { CreateRoleService } from 'src/app/usecases/roles/create-role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  protected form!: FormGroup;

  constructor(
    protected readonly router: Router,
    protected readonly _fb: FormBuilder,
    protected readonly modalRef: MatDialogRef<CreateRoleComponent>,
    protected readonly createRole: CreateRoleService,
    protected readonly updateMetrics: DisplayMetricsService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      numberOfMembers: [0],
      createdAt: [null],
      updatedAt: [null]
    })

    this.createRole.done().subscribe(response => {
      this.updateMetrics.run();
      this.modalRef.close();
    });
  }
}