import { Congregation } from "src/app/models/congregation.entity";
import { Gender } from "src/app/models/enums/gender.enum";
import { MaritalStatus } from "src/app/models/enums/marital-status.enum";
import { Role } from "src/app/models/role.entity";

export class IFormStep1Values {

    id!: string;
    name!: string;
    isSelected!: boolean;
    cpf!: string;
    rg!: string;
    dateOfBirth!: string;
    dateOfBaptism!: string;
    maritalStatus!: MaritalStatus;
    gender!: Gender;
    congregation!: Congregation;
    role!: Role;
}