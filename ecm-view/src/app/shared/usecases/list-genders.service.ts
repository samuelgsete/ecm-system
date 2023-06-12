import { Injectable } from "@angular/core";

interface Gender {
    name: string;
    value: string;
}

@Injectable()
export class ListGendersService {

    private data: Gender[] = [
        { name: 'Feminino', value: 'FEMALE'},
        { name: 'Masculino', value: 'MALE'}
    ];

    public run(): Gender[] {
        return this.data;
    }
}