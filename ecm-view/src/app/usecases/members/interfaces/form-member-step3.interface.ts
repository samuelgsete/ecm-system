import { FormControl } from "@angular/forms";

export interface IFormMemberStep3 {
    id: FormControl<string | null>;
    fatherName: FormControl<string | null>;
    motherName: FormControl<string | null>;
}