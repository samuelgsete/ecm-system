import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Affiliation } from "src/app/models/affiliation.entity";

import { Congregation } from "src/app/models/congregation.entity";
import { Member } from "src/app/models/member.entity";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class ParseDataToMemberService {
    run(step1: FormGroup, step2: FormGroup, step3: FormGroup, step4: FormGroup): Member {
        console.log(step1);
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
            role: new Role({
              id: step1.value.role.id,
              name: step1.value.role.name,
            }),
            congregation: new Congregation({
              id: step1.value.congregation.id,
              name: step1.value.congregation.name
            }),
            phone: step2.value.phone,
            email: step2.value.email,
            affiliation: new Affiliation({
                id: step3.value.id,
                fatherName: step3.value.fatherName,
                motherName: step3.value.motherName,
            }),
            photo: step4.value.photo,
            signature: step4.value.signature
        });
    }
}