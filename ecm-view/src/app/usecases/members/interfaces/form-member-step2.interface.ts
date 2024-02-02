import { FormControl } from "@angular/forms";

export interface IFormMemberStep2 {
    phone: FormControl<string | null>;
    email: FormControl<string | null>;
}