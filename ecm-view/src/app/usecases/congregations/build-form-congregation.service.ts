import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Congregation } from "src/app/models/congregation.entity";
import { IFormCongregation } from "./interfaces/form-congregation.interface";

@Injectable()
export class BuildFormCongregation {

    private _fb = inject(FormBuilder);
    
    run(values: Congregation | null): FormGroup<IFormCongregation> {
        return this._fb.group({
            id: [values?.id || null],
            name: [values?.name || null, [
              Validators.required, 
              Validators.minLength(4), 
              Validators.maxLength(24)]
            ],
            numberOfMembers: [values?.numberOfMembers || null],
            createdAt: [values?.createdAt || null],
            updatedAt: [values?.updatedAt || null]
        })
    }
}