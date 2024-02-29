import { Pipe, PipeTransform } from "@angular/core";

import { Ordination } from "src/app/models/ordination.entity";

// Pipe que exbite o tipo de ordenação selecionado
@Pipe({
    name: 'displayordination'
})
export class DisplayOrdinationPipe implements PipeTransform {

    private ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Mais antigos', name: 'older_created', isActive: false }
    ]

    transform(text: string, ...args: any[]): string {
        const result = this.ordinations.filter(ordination => ordination.name == text)[0];
        const ordination = result.label;
        return ordination;
    }
}