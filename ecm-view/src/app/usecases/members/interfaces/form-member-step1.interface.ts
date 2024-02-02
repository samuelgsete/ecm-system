import { FormControl } from "@angular/forms";

import { Congregation } from "src/app/models/congregation.entity";
import { Gender } from "src/app/models/enums/gender.enum";
import { MaritalStatus } from "src/app/models/enums/marital-status.enum";
import { Role } from "src/app/models/role.entity";

export interface IFormMemberStep1 {

    id: FormControl<string | null>;
    name: FormControl<string | null>;
    isSelected: FormControl<boolean | null>;
    cpf: FormControl<string | null>;
    rg: FormControl<string | null>;
    dateOfBirth: FormControl<string | null>;
    dateOfBaptism: FormControl<string | null>;
    maritalStatus: FormControl<MaritalStatus | null>;
    gender: FormControl<Gender | null>;
    congregation: FormControl<Congregation | null>;
    role: FormControl<Role | null>;
}