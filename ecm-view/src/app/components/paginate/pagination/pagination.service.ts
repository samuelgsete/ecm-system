import { EventEmitter, Injectable } from "@angular/core";

import { Paginate } from "src/app/models/paginate.entity";

@Injectable()
export class PaginationService {

    private render: EventEmitter<Paginate> = new EventEmitter<Paginate>();

    onBuild(pagination: Paginate): void {
        this.render.emit(pagination);
    }

    onRender(): EventEmitter<Paginate> {
        return this.render;
    }
}