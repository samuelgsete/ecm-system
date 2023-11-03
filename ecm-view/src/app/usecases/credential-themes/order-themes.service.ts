import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { Ordination } from "../../models/ordination.entity";
import { ListCredentialThemesPaginatedService } from "./list-credential-themes-paginated.service";

@Injectable()
export class OrderThemesService {

    ordinations: Ordination[] = [
        { label: 'Nome A-Z', name: 'by_name_asc' },
        { label: 'Nome Z-A', name: 'by_name_desc' },
        { label: 'Atualizados', name: 'latest_updated' }
    ]

    constructor(readonly listThemes: ListCredentialThemesPaginatedService) {}

    run(_ordination: string) {
        this.listThemes.run(new Pagination({ size: 7, ordination: _ordination}));
    }
}