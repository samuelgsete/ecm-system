import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { Paginate } from 'src/app/models/paginate.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';

@Component({
  selector: 'app-display-themes',
  templateUrl: './display-themes.component.html',
  styleUrls: ['./display-themes.component.css']
})
export class DisplayThemesComponent  implements OnInit {

  themes: CredentialTheme[] = [];
  pagination: Pagination = new Pagination();
  numberOfThemes: number = 0;
 
  constructor(
    readonly titleService: Title,
    readonly listThemes: ListCredentialThemesPaginatedService,
    readonly makeThemeToMain: MakeThemeToMainService,
    readonly onPaginate: PaginationService
  ) {}

  nextPage(page: number): void {
    this.pagination.page = page;
    this.listThemes.run(this.pagination);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Ativar o tema para as credenciais');
    this.listThemes.run(this.pagination);
    this.listThemes.done().subscribe(response => {
      this.themes = response.content;
      this.pagination.page = response.number
      this.numberOfThemes = response.totalElements
      this.pagination.total = response.totalElements 
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })

    this.makeThemeToMain.done().subscribe(response => {
      this.listThemes.run(this.pagination)
    })
  }
}