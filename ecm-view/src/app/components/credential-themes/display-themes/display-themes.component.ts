import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';
import { OrderThemesService } from 'src/app/usecases/credential-themes/order-themes.service';
import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';

@Component({
  selector: 'app-display-themes',
  templateUrl: './display-themes.component.html',
  styleUrls: ['./display-themes.component.css']
})
export class DisplayThemesComponent implements OnInit {

  themes: CredentialTheme[] = [];
  pagination: Pagination = new Pagination({ size: 5 });
  formSearch: FormControl = new FormControl();

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    readonly listThemes: ListCredentialThemesPaginatedService,
    readonly makeThemeToMain: MakeThemeToMainService,
    readonly onOrder: OrderThemesService,
    readonly onPrint: GoToPrintService
  ) { onOrder.component = this }

  ngOnInit(): void {
    this.makeThemeToMain.done().subscribe(response => {
      this.listThemes.run(this.pagination)
    })

    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listThemes.run(this.pagination);
    })

    this.listThemes.done().subscribe(response => {
      this.themes = response.content;
      this.router.navigate([], { 
        queryParams: {  currentPage: response.number, numberOfPages: response.totalPages },
        queryParamsHandling: 'merge'
      });
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.router.navigate([], { 
        queryParams: { search: keyword.toLowerCase(), currentPage: 0 },
        queryParamsHandling: 'merge'
      });
    }); 
  }
}