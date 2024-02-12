import { Injectable } from "@angular/core";

import { ListCongregationsPaginatedService } from "./list-congregations-paginated.service";
import { Ordination } from "../../models/ordination.entity";
import { DisplayCongregationsComponent } from "src/app/components/congregations/display-congregations/display-congregations.component";

@Injectable()
export class OrderCongregationsService {

    displayCongregationsComponent!: DisplayCongregationsComponent;
    
    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Antigos', name: 'older_created', isActive: false }
    ]

    constructor(readonly listCongregations: ListCongregationsPaginatedService) {}

    run(_ordination: string) {
        let pagination = this.displayCongregationsComponent.pagination;
        pagination.ordination = _ordination;
        this.displayCongregationsComponent.onLoad();
    }

    setComponent(component: DisplayCongregationsComponent): void {
        this.displayCongregationsComponent = component;
    }
}