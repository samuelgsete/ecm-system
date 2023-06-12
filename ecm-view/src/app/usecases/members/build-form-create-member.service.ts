import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import cpfValidator from "src/app/validators/cpf.validator";

@Injectable()
export class BuildFormCreateMemberService {

    public constructor(private readonly _fb:FormBuilder) {}

    public run(): any {
        const step1 = this._fb.group({
            name: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
            cpf: [null, [Validators.maxLength(11), cpfValidator]],
            rg: [null, Validators.maxLength(15)],
            dateOfBirth: [null, Validators.required],
            dateOfBaptism: [null, Validators.required],
            maritalStatus: [null, Validators.required],
            gender: [null, Validators.required],
            congregation: [null, Validators.required],
            role: [null, Validators.required],
        })
        const step2 = this._fb.group({
            phone: [null, [Validators.maxLength(255)]],
            email: [null, [Validators.email, Validators.maxLength(255)]],
        })
        const step3 = this._fb.group({
            fatherName: [null, [Validators.minLength(5), Validators.maxLength(255)]],
            motherName: [null, [Validators.minLength(5), Validators.maxLength(255)]]
        })
        const step4 = this._fb.group({
            photo: [null, Validators.required],
            signature: [null, Validators.required]
        })
        return { step1, step2, step3, step4 }
    }
}