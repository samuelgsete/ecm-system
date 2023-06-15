import { Injectable } from "@angular/core";

interface Ordination {
    label: string, name: string,
}

@Injectable()
export class OrdinationsCongregationsService {

    ordinations: Ordination[] = [
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Criados recentemente', name: 'latest_created' },
        { label: 'Atualizados recentemente', name: 'latest_updated' },
        { label: 'Mais antigos', name: 'older_created' }
    ];

    run(): Ordination[] { return this.ordinations }
}