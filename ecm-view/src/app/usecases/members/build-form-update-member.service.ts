import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { FormatDateService } from "src/app/utils/services/format-date.service";
import cpfValidator from "src/app/utils/validators/cpf.validator";
import acceptNullValues from "src/app/utils/validators/accept-null-values.validator";

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
            name: [response.name, [Validators.required, Validators.minLength(6), Validators.maxLength(48)]],
            cpf: [response.cpf, [acceptNullValues, cpfValidator]],
            rg: [response.rg, acceptNullValues],
            dateOfBirth: [this.format.run(response.dateOfBirth,'yyyy-MM-dd'), Validators.required],
            dateOfBaptism: [this.format.run(response.dateOfBaptism,'yyyy-MM-dd'), Validators.required],
            maritalStatus: [response.maritalStatus, Validators.required],
            gender: [response.gender, Validators.required],
            congregation: [response.congregation],
            role: [response.role],
        })
        const step2 = this._fb.group({
            phone: [response.phone, acceptNullValues],
            email: [response.email, [acceptNullValues, Validators.email, Validators.minLength(6), Validators.maxLength(48)]],
        })
        const step3 = this._fb.group({
            id: [response.affiliation.id],
            fatherName: [response.affiliation.fatherName, [acceptNullValues, Validators.minLength(6), Validators.maxLength(32)]],
            motherName: [response.affiliation.motherName, [acceptNullValues, Validators.minLength(6), Validators.maxLength(32)]]
        })
        const step4 = this._fb.group({
            photo: [response.photo, Validators.required],
            signature: [response.signature, Validators.required]
        })
        return { step1, step2, step3, step4 }
    }
}