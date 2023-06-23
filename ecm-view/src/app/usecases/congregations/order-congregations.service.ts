import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { ListCongregationsPaginatedService } from "./list-congregations-paginated.service";

interface Ordination {
    label: string
    name: string
}

@Injectable()
export class OrderCongregationsService {
    
    ordinations: Ordination[] = [
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Criados recentemente', name: 'latest_created' },
        { label: 'Atualizados recentemente', name: 'latest_updated' },
        { label: 'Mais antigos', name: 'older_created' }
    ]

    constructor(readonly listCongregations: ListCongregationsPaginatedService) {}

    run(_ordination: string) {;
        this.listCongregations.run(new Pagination({ size: 6, ordination: _ordination }));
    }
}