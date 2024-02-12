import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { ListRolesPaginatedService } from "./list-roles-paginated.service";
import { Ordination } from "../../models/ordination.entity";
import { DisplayRolesComponent } from "src/app/components/roles/display-roles/display-roles.component";

@Injectable()
export class OrderRolesService {

    displayMembersComponent!: DisplayRolesComponent;

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Antigos', name: 'older_created', isActive: false }
    ]

    constructor(readonly listRoles: ListRolesPaginatedService) {}

    run(_ordination: string) {
        let pagination = this.displayMembersComponent.pagination;
        pagination.ordination = _ordination;
        this.displayMembersComponent.onLoad();
    }

    setComponent(component: DisplayRolesComponent): void {
        this.displayMembersComponent = component;
    }
}