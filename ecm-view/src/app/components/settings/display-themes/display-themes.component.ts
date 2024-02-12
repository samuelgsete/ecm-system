import { Component, OnInit } from '@angular/core';
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
  numberOfThemes: number = 0;
 
  constructor(
    readonly listThemes: ListCredentialThemesPaginatedService,
    readonly makeThemeToMain: MakeThemeToMainService
  ) {}

  changePage(page: number): void {
    this.pagination.page = page;
    this.onLoad();
  }

  onLoad(): void {
    this.themes$ = this.listThemes.run(this.pagination);
  }

  ngOnInit(): void {
    this.onLoad();
    this.makeThemeToMain.done().subscribe(response => {
      this.onLoad();
    })
  }
}