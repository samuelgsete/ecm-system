import { Injectable } from "@angular/core";

import { Pagination } from "src/app/models/pagination.entity";
import { DisplayThemesComponent } from "src/app/components/credential-themes/display-themes/display-themes.component";

interface Ordination {
    label: string
    name: string
}

@Injectable()
export class OrderThemesService {

    component!: DisplayThemesComponent
    ordinations: Ordination[] = [
        { label: 'Nome crescente', name: 'by_name_asc' },
        { label: 'Nome decrescente', name: 'by_name_desc' },
        { label: 'Atualizados recentemente', name: 'latest_updated' }
    ]

    run(ordination: string) {
        let pagination: Pagination = this.component.pagination;
        pagination.ordination = ordination;
        this.component.listThemes.run(pagination);
    }
}