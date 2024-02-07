import { FormControl } from "@angular/forms";

import { Congregation } from "src/app/models/congregation.entity";
import { Role } from "src/app/models/role.entity";

export interface IFormMemberStep1 {

    id: FormControl<string | null>;
    name: FormControl<string | null>;
    isSelected: FormControl<boolean | null>;
    cpf: FormControl<string | null>;
    rg: FormControl<string | null>;
    dateOfBirth: FormControl<string | null>;
    dateOfBaptism: FormControl<string | null>;
    maritalStatus: FormControl<string | null>;
    gender: FormControl<string | null>;
    congregation: FormControl<Congregation | null>;
    role: FormControl<Role | null>;
}