import { Injectable } from "@angular/core";

interface MaritalStatus {
    name: string;
    value: string;
}

@Injectable()
export class ListMaritalStatusService {

    private readonly data: MaritalStatus[] = [
        { name: 'Casado(a)',        value: 'MARRIED' },
        { name: 'Solteiro(a)',      value: 'SINGLE' },
        { name: 'Viúvo(a)',         value: 'WINDOWER' },
        { name: 'Divorciado(a)',    value: 'DIVORCED' }
    ]

    public run(): MaritalStatus[] {
        return this.data;
    }
}