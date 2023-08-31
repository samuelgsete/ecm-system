import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Role } from 'src/app/models/role.entity';
import { UpdateRoleService } from 'src/app/usecases/roles/update-role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  
  protected form!: FormGroup;

  constructor(
    protected readonly _fb: FormBuilder,
    protected readonly router: Router,
    protected modalRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) protected role: Role,
    protected readonly update: UpdateRoleService
  ) {}
  
  private buildForm(role: Role): FormGroup {
    return this._fb.group({
      id: [role.id],
      name: [role.name, [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      numberOfMembers: [role.numberOfMembers],
      createdAt: [role.createdAt],
      updatedAt: [role.updatedAt]
    })
  }

  ngOnInit(): void {
    this.form = this.buildForm(this.role);
    this.update.done().subscribe(response => {
      this.modalRef.close();
    });
  }
}