import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { Congregation } from 'src/app/models/congregation.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Role } from 'src/app/models/role.entity';
import { ListGendersService } from 'src/app/shared/usecases/list-genders.service';
import { ListMaritalStatusService } from 'src/app/shared/usecases/list-marital-status.service';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { CreateMemberService } from 'src/app/usecases/members/create-member.service';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { DeletePhotoService } from 'src/app/usecases/uploads/delete-photo.service';
import { DeleteSignatureService } from 'src/app/usecases/uploads/delete-signature.service';
import { UploadPhotoService } from 'src/app/usecases/uploads/upload-photo.service';
import { UploadSignatureService } from 'src/app/usecases/uploads/upload-signature.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  protected form!: FormGroup;
  protected roles: Role[] = [];
  protected congregations: Congregation[] = [];
  protected isUploadedPhoto: boolean = false;
  protected isUploadedSignature: boolean = false;

  public constructor(
    protected readonly _fb: FormBuilder,
    protected readonly router: Router,
    protected readonly listGenders: ListGendersService,
    protected readonly listMaritalStatus: ListMaritalStatusService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly uploadPhoto: UploadPhotoService,
    protected readonly deletePhoto: DeletePhotoService,
    protected readonly uploadSignature: UploadSignatureService,
    protected readonly deleteSignature: DeleteSignatureService,
    protected readonly createMember: CreateMemberService
  ) {}

  public onUploadPhoto(event: any): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('img', file);
    this.uploadPhoto.run(formData);
  }

  public onUploadSignature(event: any): void {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('img', file);
    this.uploadSignature.run(formData);
  }

  public ngOnInit(): void {
    this.form = this._fb.group({
      name: ['Samuel de Souza Taveira', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      cpf: ['60783900317', [Validators.required, Validators.maxLength(11)]],
      rg: ['20078888721', Validators.required],
      phone: ['85989711010', [Validators.required, Validators.maxLength(255)]],
      email: ['samuelgsete@yahoo.com', [Validators.required, Validators.email, Validators.maxLength(255)]],
      dateOfBirth: ['1995-06-21', Validators.required],
      dateOfBaptism: ['2009-02-15', Validators.required],
      maritalStatus: ['', Validators.required],
      gender: ['Masculino', Validators.required],
      congregation: ['Sede', Validators.required],
      role: ['Auxiliar', Validators.required],
      fatherName: ['Antônio Taveira', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      motherName: ['Maria Madalena de Souza Taveira', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      photo: [null, Validators.required],
      signature:[null, Validators.required]
    });

    this.listRoles.run(new Pagination());
    this.listRoles.done().subscribe(response => {
      this.roles = response.content
    });

    this.listCongregations.run(new Pagination());
    this.listCongregations.done().subscribe(response => {
      this.congregations = response.content;
    })

    this.uploadPhoto.done().subscribe(response => {
      this.form.controls['photo'].patchValue(response);
      this.isUploadedPhoto = true;
    })

    this.deletePhoto.done().subscribe(response => {
      this.isUploadedPhoto = false;
      this.form.controls['photo'].patchValue(null);
    })

    this.uploadSignature.done().subscribe(response => {
      this.form.controls['signature'].patchValue(response);
      this.isUploadedSignature = true;
    })

    this.deleteSignature.done().subscribe(response => {
      this.isUploadedSignature = false;
      this.form.controls['signature'].patchValue(null);
    })

    this.createMember.done().subscribe(response => {
      this.router.navigateByUrl("/members");
    })
  }
}