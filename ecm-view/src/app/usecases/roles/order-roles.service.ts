import { Injectable } from "@angular/core";

import { Ordination } from "../../models/ordination.entity";

@Injectable()
export class OrderRolesService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Recentes', name: 'latest_created', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false },
        { label: 'Antigos', name: 'older_created', isActive: false }
    ]

    setActive(ordination: Ordination): void {
        const currentOrdination = this.ordinations.filter(ordination => ordination.isActive)[0];
        currentOrdination.isActive = false;
        ordination.isActive = true;
    }
}