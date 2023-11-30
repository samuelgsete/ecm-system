import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { CreateMember2Component } from "src/app/components/members/create-member2/create-member2.component";
import { UpdateMemberComponent } from "src/app/components/members/update-member/update-member.component";
import { Affiliation } from "src/app/models/affiliation.entity";
import { Congregation } from "src/app/models/congregation.entity";
import { Member } from "src/app/models/member.entity";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class ParseDataToMemberService {

  component!: CreateMember2Component | UpdateMemberComponent;

  run(): Member {
    const step1: FormGroup = this.component.step1
    const step2: FormGroup = this.component.step2
    const step3: FormGroup = this.component.step3
    const step4: FormGroup = this.component.step4

    const _role = step1.value.role;
    const _congregation = step1.value.congregation;

    return new Member({
      id: step1.value.id,
      isSelected: step1.value.isSelected,
      name: step1.value.name,
      cpf: step1.value.cpf,
      rg: step1.value.rg,
      dateOfBirth: new Date(step1.value.dateOfBirth).toISOString(),
      dateOfBaptism: new Date(step1.value.dateOfBaptism).toISOString(),
      gender: step1.value.gender,
      maritalStatus: step1.value.maritalStatus,
      role: _role,
      congregation: _congregation,
      phone: step2.value.phone,
      email: step2.value.email,
      affiliation: new Affiliation({
          id: step3.value.id,
          fatherName: step3.value.fatherName,
          motherName: step3.value.motherName
      }),
      photo: step4.value.photo,
      signature: step4.value.signature
    })
  }
}