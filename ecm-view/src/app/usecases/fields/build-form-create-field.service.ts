import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable()
export class BuildFormCreateFieldService {

    constructor(private readonly _fb: FormBuilder) {}

    run(): any {
        const step1 = this._fb.group({
            name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
            logo:[null, Validators.required]
        });

        const step2 = this._fb.group({
            name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
            logo:[null, Validators.required]
        });
        return { step1, step2 }
    }
}