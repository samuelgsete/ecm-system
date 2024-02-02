import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IFormRole } from "./interfaces/form-role.interface";
import { Role } from "src/app/models/role.entity";

@Injectable()
export class BuildFormRole {

    private _fb = inject(FormBuilder);
    
    run(values: Role | null): FormGroup<IFormRole> {
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