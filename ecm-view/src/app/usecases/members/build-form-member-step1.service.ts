import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IFormMemberStep1 } from "./interfaces/form-member-step1.interface";
import { IFormStep1Values } from "./interfaces/form-values-step1.interface";
import cpfValidator from "src/app/utils/validators/cpf.validator";
import acceptNullValues from "src/app/utils/validators/accept-null-values.validator";
import { MaritalStatus } from "src/app/models/enums/marital-status.enum";
import { Gender } from "src/app/models/enums/gender.enum";

@Injectable()
export class BuildFormMemberStep1 {

    private _fb = inject(FormBuilder);

    run(values: IFormStep1Values | null): FormGroup<IFormMemberStep1> {
        return this._fb.group({
            id: [values?.id || null],
            name: [values?.name || null, [Validators.required, Validators.minLength(6), Validators.maxLength(48)]],
            isSelected: [values?.isSelected || false],
            cpf: [values?.cpf || null, [acceptNullValues, cpfValidator]],
            rg: [values?.rg || null, acceptNullValues],
            dateOfBirth: [values?.dateOfBirth || null, Validators.required],
            dateOfBaptism: [values?.dateOfBaptism || null, Validators.required],
            maritalStatus: [values?.maritalStatus || MaritalStatus.SINGLE, Validators.required],
            gender: [values?.gender || Gender.MALE, Validators.required],
            congregation: [values?.congregation || null],
            role: [values?.role || null]
        })
    }
}