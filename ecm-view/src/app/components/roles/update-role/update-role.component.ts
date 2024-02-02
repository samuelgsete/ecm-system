import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Role } from 'src/app/models/role.entity';
import { BuildFormRole } from 'src/app/usecases/roles/build-form-role.service';
import { IFormRole } from 'src/app/usecases/roles/interfaces/form-role.interface';
import { UpdateRoleService } from 'src/app/usecases/roles/update-role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  
  protected form!: FormGroup<IFormRole>;

  constructor(
    protected readonly router: Router,
    protected modalRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) protected role: Role,
    protected readonly buildForm: BuildFormRole,
    protected readonly update: UpdateRoleService
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm.run(this.role);
    this.update.done().subscribe(response => {
      this.modalRef.close();
    });
  }
}