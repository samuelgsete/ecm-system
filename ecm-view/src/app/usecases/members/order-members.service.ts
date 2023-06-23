import { Injectable } from "@angular/core";

import { ListMembersPaginatedService } from "./list-members-paginated.service"; 
import { Pagination } from "src/app/models/pagination.entity";

interface Ordination {
    label: string
    name: string
}

@Injectable()
export class OrderMembersService {

    ordinations: Ordination[] = [
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Criados recentemente', name: 'latest_created' },
        { label: 'Atualizados recentemente', name: 'latest_updated' },
        { label: 'Mais antigos', name: 'older_created' }
    ]

    constructor(readonly listMembers: ListMembersPaginatedService) {}

    run(_ordination: string) {;
        this.listMembers.run(new Pagination({ size: 6, ordination: _ordination }));
    }
}