import { Injectable } from "@angular/core";

import { ListMembersPaginatedService } from "./list-members-paginated.service"; 
import { Pagination } from "src/app/models/pagination.entity";
import { Ordination } from "../../models/ordination.entity";

@Injectable()
export class OrderMembersService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc' },
        { label: 'Nome Z-A', name: 'by_name_desc' },
        { label: 'Recentes', name: 'latest_created' },
        { label: 'Atualizados', name: 'latest_updated' },
        { label: 'Antigos', name: 'older_created' }
    ]

    constructor(readonly listMembers: ListMembersPaginatedService) {}

    run(_ordination: string) {;
        this.listMembers.run(new Pagination({ ordination: _ordination }));
    }
}