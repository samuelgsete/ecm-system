import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { ListRolesPaginatedService } from "./list-roles-paginated.service";
import { Ordination } from "../../models/ordination.entity";

@Injectable()
export class OrderRolesService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc' },
        { label: 'Nome Z-A', name: 'by_name_desc' },
        { label: 'Recentes', name: 'latest_created' },
        { label: 'Atualizados', name: 'latest_updated' },
        { label: 'Antigos', name: 'older_created' }
    ]

    constructor(readonly listRoles: ListRolesPaginatedService) {}

    run(_ordination: string) {
        this.listRoles.run(new Pagination({ ordination: _ordination}));
    }
}