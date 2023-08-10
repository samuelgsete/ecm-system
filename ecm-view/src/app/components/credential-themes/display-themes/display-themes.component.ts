import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Paginate } from 'src/app/models/paginate.entity';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';
import { OrderThemesService } from 'src/app/usecases/credential-themes/order-themes.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { PrintAllCredentialsResource } from 'src/app/resources/credentials/print-all-credentials.resource';

@Component({
  selector: 'app-display-themes',
  templateUrl: './display-themes.component.html',
  styleUrls: ['./display-themes.component.css'],
  providers: [
    PrintAllCredentialsResource,
    PrintAllCredentialsService
  ]
})
export class DisplayThemesComponent implements OnInit {

  themes: CredentialTheme[] = [];
  pagination: Pagination = new Pagination({ size: 5 });
  formSearch: FormControl = new FormControl();

  constructor(
    readonly listThemes: ListCredentialThemesPaginatedService,
    readonly makeThemeToMain: MakeThemeToMainService,
    readonly onOrder: OrderThemesService,
    readonly onPrint: PrintAllCredentialsService,
    readonly onPaginate: PaginationService,

  ) { onOrder.component = this }

  nextPage(page: number): void {
    this.pagination.page = page;
    this.listThemes.run(this.pagination);
  }

  ngOnInit(): void {
    this.listThemes.run(this.pagination);
    this.listThemes.done().subscribe(response => {
      this.themes = response.content;
      this.pagination.page = response.number     
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })

    this.makeThemeToMain.done().subscribe(response => {
      this.listThemes.run(this.pagination)
    })

    this.formSearch.valueChanges.pipe(debounceTime(900)).subscribe(keyword => {
      this.pagination.search = keyword;
      this.listThemes.run(this.pagination);
    })

    this.onPrint.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent);
    })
  }
}