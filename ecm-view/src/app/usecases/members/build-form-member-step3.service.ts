import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IFormValuesStep3 } from "./interfaces/form-values-step3.interface";
import acceptNullValues from "src/app/utils/validators/accept-null-values.validator";
import { IFormMemberStep3 } from "./interfaces/form-member-step3.interface";

@Injectable()
export class BuildFormMemberStep3 {

    private _fb = inject(FormBuilder);

    run(values: IFormValuesStep3 | null): FormGroup<IFormMemberStep3> {
        return this._fb.group({
            id: [values?.id || null],
            fatherName: [values?.fatherName || null, acceptNullValues],
            motherName: [values?.motherName || null, [
                acceptNullValues,
                Validators.minLength(6),
                Validators.maxLength(32)
            ]],
        })
    }
}