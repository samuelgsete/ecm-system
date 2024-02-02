import { FormControl } from "@angular/forms";

export interface IFormRole {
    
    id: FormControl<string | null>,
    name: FormControl<string | null>,
    numberOfMembers: FormControl<number | null>,
    createdAt: FormControl<string | null>,
    updatedAt:  FormControl<string | null>
}