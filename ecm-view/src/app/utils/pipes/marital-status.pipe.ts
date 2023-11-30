import { Pipe, PipeTransform } from '@angular/core';

interface MaritalStatus {
    name: string;
    value: string;
}

@Pipe({
  name: 'maritalstatus'
})
export class MaritalStatusPipe implements PipeTransform {

    public transform(value: any,...args: any[]) {
        const data: MaritalStatus[] = [
            { name: 'Casado(a)',        value: 'MARRIED' },
            { name: 'Solteiro(a)',      value: 'SINGLE' },
            { name: 'Viúvo(a)',         value: 'WINDOWER' },
            { name: 'Divorciado(a)',    value: 'DIVORCED' }
        ]
        const name = data.filter(item => value === item.value)[0].name;
        return name;
    }
}