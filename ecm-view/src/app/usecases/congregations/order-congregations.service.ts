import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { ListCongregationsPaginatedService } from "./list-congregations-paginated.service";
import { Ordination } from "../models/ordination.entity";

@Injectable()
export class OrderCongregationsService {
    
    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc' },
        { label: 'Nome Z-A', name: 'by_name_desc' },
        { label: 'Recentes', name: 'latest_created' },
        { label: 'Atuais', name: 'latest_updated' },
        { label: 'Antigos', name: 'older_created' }
    ]

    constructor(readonly listCongregations: ListCongregationsPaginatedService) {}

    run(_ordination: string) {;
        this.listCongregations.run(new Pagination({ size: 6, ordination: _ordination }));
    }
}