import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import cpfValidator from "src/app/validators/cpf.validator";
import acceptNullValues from "src/app/validators/accept-null-values.validator";

@Injectable()
export class BuildFormCreateMemberService {

    public constructor(private readonly _fb:FormBuilder) {}

    public run(): any {
        const step1 = this._fb.group({
            name: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
            isSelected: [true],
            cpf: [null, [acceptNullValues, cpfValidator]],
            rg: [null, acceptNullValues],
            dateOfBirth: [null, Validators.required],
            dateOfBaptism: [null, Validators.required],
            maritalStatus: [null, Validators.required],
            gender: [null, Validators.required],
            congregation: [null, Validators.required],
            role: [null, Validators.required]
        })
        const step2 = this._fb.group({
            phone: [null, acceptNullValues],
            email: [null, [acceptNullValues, Validators.email, Validators.maxLength(48)]],
        })
        const step3 = this._fb.group({
            fatherName: [null, [acceptNullValues, Validators.minLength(6), Validators.maxLength(32)]],
            motherName: [null, [acceptNullValues, Validators.minLength(6), Validators.maxLength(32)]]
        })
        const step4 = this._fb.group({
            photo: [null, Validators.required],
            signature: [null, Validators.required]
        })
        return { step1, step2, step3, step4 }
    }
}