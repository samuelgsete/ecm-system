import { Injectable } from "@angular/core";

interface Gender {
    name: string;
    value: string;
}

@Injectable()
export class ListGendersService {

    private readonly data: Gender[] = [
        { name: 'Feminino', value: 'FEMALE'},
        { name: 'Masculino', value: 'MALE'}
    ];

    run(): Gender[] {
        return this.data;
    }
}