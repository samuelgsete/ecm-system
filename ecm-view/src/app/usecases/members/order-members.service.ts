import { Injectable } from "@angular/core";

import { ListMembersPaginatedService } from "./list-members-paginated.service"; 
import { Pagination } from "src/app/models/pagination.entity";
import { Ordination } from "../../models/ordination.entity";

@Injectable()
export class OrderMembersService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Antigos', name: 'older_created', isActive: false }
    ]

    constructor(readonly listMembers: ListMembersPaginatedService) {}

    run(_ordination: string, pagination: Pagination) {
        pagination.ordination = _ordination;
        this.listMembers.run(pagination);
    }
}