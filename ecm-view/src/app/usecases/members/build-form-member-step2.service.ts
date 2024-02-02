import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IFormValuesStep2 } from "./interfaces/form-values-step2.interface";
import acceptNullValues from "src/app/utils/validators/accept-null-values.validator";
import { IFormMemberStep2 } from "./interfaces/form-member-step2.interface";

@Injectable()
export class BuildFormMemberStep2 {

    private _fb = inject(FormBuilder);

    run(values: IFormValuesStep2 | null): FormGroup<IFormMemberStep2> {
        return this._fb.group({
            phone: [values?.phone || null, acceptNullValues],
            email: [values?.email || null, [
                acceptNullValues,
                Validators.email,
                Validators.maxLength(48)
            ]],
        })
    }
}