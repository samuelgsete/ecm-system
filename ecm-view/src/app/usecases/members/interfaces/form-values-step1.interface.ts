import { Congregation } from "src/app/models/congregation.entity";
import { Role } from "src/app/models/role.entity";

export class IFormStep1Values {

    id!: string;
    name!: string;
    isSelected!: boolean;
    cpf!: string;
    rg!: string;
    dateOfBirth!: string;
    dateOfBaptism!: string;
    maritalStatus!: string;
    gender!: string;
    congregation!: Congregation;
    role!: Role;
}