import { Pipe, PipeTransform } from "@angular/core";

// Pipe que diminui o tamanho de textos muito longos
@Pipe({
    name: 'smalltext'
})
export class SmallTextPipe implements PipeTransform {
    public transform(text: string, ...args: any[]): string {
        const size = parseInt(args[0]);
        return text.substring(0, size).concat('...')
    }
}