import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { FormatDateService } from "src/app/utils/services/format-date.service";
import cpfValidator from "src/app/validators/cpf.validator";

@Injectable()
export class BuildFormUpdateMemberService {

    constructor(
        private readonly _fb:FormBuilder,
        private readonly format: FormatDateService
    ) {}

    run(response: any): any {
        const step1 = this._fb.group({
            id: [response.id],
            isSelected: [response.isSelected],
            name: [response.name, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
            cpf: [response.cpf, [Validators.maxLength(11), cpfValidator]],
            rg: [response.rg, Validators.maxLength(15)],
            dateOfBirth: [this.format.run(response.dateOfBirth,'yyyy-MM-dd'), Validators.required],
            dateOfBaptism: [this.format.run(response.dateOfBaptism,'yyyy-MM-dd'), Validators.required],
            maritalStatus: [response.maritalStatus, Validators.required],
            gender: [response.gender, Validators.required],
            congregation: [response.congregation, Validators.required],
            role: [response.role, Validators.required],
        })
        const step2 = this._fb.group({
            phone: [response.phone, [Validators.maxLength(255)]],
            email: [response.email, [Validators.email, Validators.maxLength(255)]],
        })
        const step3 = this._fb.group({
            id: [response.affiliation.id],
            fatherName: [response.affiliation.fatherName, [Validators.minLength(5), Validators.maxLength(255)]],
            motherName: [response.affiliation.motherName, [Validators.minLength(5), Validators.maxLength(255)]]
        })
        const step4 = this._fb.group({
            photo: [response.photo, Validators.required],
            signature: [response.signature, Validators.required]
        })
        return { step1, step2, step3, step4 }
    }
}