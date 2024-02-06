import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { Ordination } from "../../models/ordination.entity";
import { ListCredentialThemesPaginatedService } from "./list-credential-themes-paginated.service";

@Injectable()
export class OrderThemesService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc', isActive: true },
        { label: 'Nome Z-A', name: 'by_name_desc', isActive: false },
        { label: 'Atualizados', name: 'latest_updated', isActive: false }
    ]

    constructor(readonly listThemes: ListCredentialThemesPaginatedService) {}

    run(_ordination: string, pagination: Pagination) {
        pagination.ordination = _ordination;
        this.listThemes.run(pagination);
    }
}