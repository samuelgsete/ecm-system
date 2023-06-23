import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { ListRolesPaginatedService } from "./list-roles-paginated.service";

interface Ordination {
    label: string
    name: string
}

@Injectable()
export class OrderRolesService {

    ordinations: Ordination[] = [
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Criados recentemente', name: 'latest_created' },
        { label: 'Atualizados recentemente', name: 'latest_updated' },
        { label: 'Mais antigos', name: 'older' }
    ]

    constructor(readonly listRoles: ListRolesPaginatedService) {}

    run(_ordination: string) {
        const pagination = new Pagination({ size: 7, ordination: _ordination});
        this.listRoles.run(pagination);
    }
}