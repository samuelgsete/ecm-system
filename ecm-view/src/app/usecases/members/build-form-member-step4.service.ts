import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IFormValuesStep4 } from "./interfaces/form-values-step4.interface";
import { IFormMemberStep4 } from "./interfaces/form-member-step4.interface";

@Injectable()
export class BuildFormMemberStep4 {

    private _fb = inject(FormBuilder);

    run(values: IFormValuesStep4 | null): FormGroup<IFormMemberStep4> {
        return this._fb.group({
            photo: [values?.photo || null, Validators.required],
            signature: [values?.signature || null, Validators.required]
        })
    }
}