import { AbstractControl } from "@angular/forms";

const x = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const y = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

export default function cpfValidator(control: AbstractControl) {
    let cpf = control.value;
    if(cpf == '')
        return null;
    if(cpf == null)
        return { invalidCpf: true }
    if(cpf.length != 11)
        return { invalidCpf: true }
    if(
        (cpf == '00000000000') || (cpf == '11111111111') || 
        (cpf == '22222222222') || (cpf == '33333333333') || 
        (cpf == '44444444444') || (cpf == '55555555555') || 
        (cpf == '66666666666') || (cpf == '77777777777') || 
        (cpf == '88888888888') || (cpf == '99999999999')
    )
        return { invalidCpf: true }

    let result = run(cpf);

    if(!result)
        return { invalidCpf: true }

    return null  
}

function run(cpf: string) {        
    let stringArray = cpf.split('');
    let firstDigit = parseInt(stringArray[9]);
    let secondDigit = parseInt(stringArray[10]);
    let digitsCpf: number[] = [];
    
    for(let i = 0; i < stringArray.length - 2; i++) {
        digitsCpf.push(parseInt(stringArray[i]));
    }
    let _firstDigit = toFirstDigit(digitsCpf);
    digitsCpf.push(_firstDigit);
    let _secondDigit = toSecondDigit(digitsCpf);

    if(firstDigit == _firstDigit && secondDigit == _secondDigit)
        return true;       
    return false;
}

function toFirstDigit(digits: number[]): number {
    let sum = 0;
    digits.forEach((digit, index) => {
        sum += digit * x[index];
    })
    let rest = sum % 11;
    if(rest < 2) 
        return 0;
    return 11 - rest;
}

function toSecondDigit(digits: number[]): number {
    let sum = 0;
    digits.forEach((digit, index) => {
        sum += digit * y[index];
    })
    let rest = sum % 11;
    if(rest < 2) 
        return 0;
    return 11 - rest;
}