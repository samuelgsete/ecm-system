import { Injectable } from "@angular/core";

interface Ordination {
    label: string, name: string
}

@Injectable()
export class OrdinationsThemesService {

    ordinations: Ordination[] = [
        { label: 'Nome crescente', name: 'by_name_asc' },
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Atualizados recentemente', name: 'latest_updated' }
    ];

    run(): Ordination[] { return this.ordinations }
}