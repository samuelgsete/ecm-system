import { Affiliation } from "./affiliation.entity";
import { Congregation } from "./congregation.entity";
import { EntityBase } from "./entity-base.entity";
import { ImageModel } from "./image-model.entity";
import { Role } from "./role.entity";

export class Member extends EntityBase {

    public name!: string;
    public cpf!: string;
    public rg!: string;
    public dateOfBirth!: string;
    public dateOfBaptism!: string;
    public age!: number;
    public birthday!: string;
    public isBirthday!: boolean;
    public phone!: string;
    public email!: string;
    public gender!: string;
    public maritalStatus!: string;
    public isSelected!: boolean;
    
    // Filiação
    public affiliation!: Affiliation;

    // Cargo eclesiástico
    public role!: Role;

    // Congregação
    public congregation!: Congregation;

    // Foto 3x4
    public photo!: ImageModel;

    // Assinatura
    public signature!: ImageModel;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values) 
    }
}