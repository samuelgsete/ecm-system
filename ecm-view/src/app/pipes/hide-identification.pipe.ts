import { Pipe, PipeTransform } from "@angular/core";

// Oculta os dados de identificação do usuário
@Pipe({
    name: 'hideidentification'
})
export class HideIdentificationPipe implements PipeTransform {
    public transform(text: string, ...args: any[]): string {
        if(text.includes('000000')) {
            return '----------';
        }
        return text;
    }
}