import { Component, OnInit } from '@angular/core';
import { CredentialTheme } from 'src/app/models/credential-theme.entity';
import { Paginate } from 'src/app/models/paginate.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListCredentialThemesPaginatedService } from 'src/app/usecases/credential-themes/list-credential-themes-paginated.service';
import { MakeThemeToMainService } from 'src/app/usecases/credential-themes/make-theme-to-main.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-themes',
  templateUrl: './display-themes.component.html',
  styleUrls: ['./display-themes.component.css']
})
export class DisplayThemesComponent implements OnInit {

  themes$!: Observable<CredentialTheme[]>;
  pagination: Pagination = new Pagination();
  numberOfThemes: number = 0;
 
  constructor(
    readonly listThemes: ListCredentialThemesPaginatedService,
    readonly makeThemeToMain: MakeThemeToMainService,
    readonly onPaginate: PaginationService
  ) {}

  nextPage(page: number): void {
    this.pagination.page = page;
    this.onLoad();
  }

  onLoad(): void {
    this.themes$ = this.listThemes.run(this.pagination);
  }

  ngOnInit(): void {
    this.onLoad();

    this.makeThemeToMain.done().subscribe(response => {
      this.listThemes.run(this.pagination)
    })
  }
}