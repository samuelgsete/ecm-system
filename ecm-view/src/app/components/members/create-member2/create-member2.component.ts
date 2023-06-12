import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Congregation } from 'src/app/models/congregation.entity';
import { Member } from 'src/app/models/member.entity';
import { Role } from 'src/app/models/role.entity';
import { BuildFormCreateMemberService } from 'src/app/usecases/members/build-form-create-member.service';
import { CreateMemberService } from 'src/app/usecases/members/create-member.service';

@Component({
  selector: 'app-create-member2',
  templateUrl: './create-member2.component.html',
  styleUrls: ['./create-member2.component.css']
})
export class CreateMember2Component implements OnInit {

  protected step1!: FormGroup;
  protected step2!: FormGroup;
  protected step3!: FormGroup;
  protected step4!: FormGroup;
   
  public constructor(
    protected readonly router: Router,
    protected readonly buildForm: BuildFormCreateMemberService,
    protected readonly createMember: CreateMemberService
  ) {}

  public getData(){
    return new Member({
      id: null,
      name: this.step1.value.name,
      cpf: this.step1.value.cpf,
      rg: this.step1.value.rg,
      dateOfBirth: new Date(this.step1.value.dateOfBirth).toISOString(),
      dateOfBaptism: new Date(this.step1.value.dateOfBaptism).toISOString(),
      gender: this.step1.value.gender,
      maritalStatus: this.step1.value.maritalStatus,
      role: new Role({
        id: this.step1.value.role.id,
        name: this.step1.value.role.name,
      }),
      congregation: new Congregation({
        id: this.step1.value.congregation.id,
        name: this.step1.value.congregation.name
      }),
      phone: this.step2.value.phone,
      email: this.step2.value.email,
      fatherName: this.step3.value.fatherName,
      motherName: this.step3.value.motherName,
      photo: this.step4.value.photo,
      signature: this.step4.value.signature
    })
  }

  public ngOnInit(): void {
    const { step1, step2, step3, step4 } = this.buildForm.run();
    this.step1 = step1;
    this.step2 = step2;
    this.step3 = step3;
    this.step4 = step4;
    this.createMember.done().subscribe(response => {
      this.router.navigateByUrl("/app/members");
    })
  }
}