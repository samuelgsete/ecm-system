import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';

@Component({
  selector: 'app-display-themes',
  templateUrl: './display-themes.component.html',
  styleUrls: ['./display-themes.component.css']
})
export class DisplayThemesComponent implements OnInit {

  themes$!: Observable<CredentialTheme[]>;
  pagination: Pagination = new Pagination();
     
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly listThemes: ListCredentialThemesPaginatedService,
    protected readonly makeThemeToMain: MakeThemeToMainService
  ) {}

  changePage(nextPage: number): void {
    this.pagination.pageCurrent = nextPage;
    this.onLoad();
    window.scrollTo({ top: 60, behavior: 'smooth' });
  }

  changeSizePage(size: number): void {
    this.pagination.pageCurrent = 0;
    this.pagination.pageSize = size;
    this.onLoad();
  }

  onLoad(): void {
    this.themes$ = this.listThemes.run(this.pagination);
  }

  handleActiveTheme(id: string) {
    this.makeThemeToMain.run(id);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] || '';
      const ordination = params['ordination'] || 'by_name_asc';
      const pageCurrent = params['page_number'] || 0;
      const pageSize = params['page_size'] || 10;
    
      this.pagination.search = search;
      this.pagination.ordination = ordination;
      this.pagination.pageCurrent = parseInt(pageCurrent);
      this.pagination.pageSize = parseInt(pageSize);
    });
    this.onLoad();
    this.makeThemeToMain.done().subscribe(response => {
      this.onLoad();
    })
  }
}