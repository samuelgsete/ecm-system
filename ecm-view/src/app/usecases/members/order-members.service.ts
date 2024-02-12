import { Injectable } from "@angular/core";

import { Ordination } from "../../models/ordination.entity";
import { DisplayMembersComponent } from "src/app/components/members/display-members/display-members.component";

@Injectable()
export class OrderMembersService {

    displayMembersComponent!: DisplayMembersComponent;

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Antigos', name: 'older_created', isActive: false }
    ];

    run(_ordination: string) {
        let pagination = this.displayMembersComponent.pagination;
        pagination.ordination = _ordination;
        this.displayMembersComponent.onLoad();
    }

    setComponent(component: DisplayMembersComponent): void {
        this.displayMembersComponent = component;
    }
}