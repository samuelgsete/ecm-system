import { Injectable } from "@angular/core";

interface Ordination {
    label: string
    name: string,
}

@Injectable()
export class OrdinationsMembersService {

    ordinations: Ordination[] = [
        { label: 'Nome crescente', name: 'smallage' },
        { label: 'Nome decrescente', name: 'bigage' },
        { label: 'Mais velhos', name: 'smallage' },
        { label: 'Mais novos novos', name: 'bigage' },
        { label: 'Criados recentemente', name: 'latest' },
        { label: 'Atualizados recentemente', name: 'mostupdated' }
    ]

    run(): Ordination[] { return this.ordinations }
}