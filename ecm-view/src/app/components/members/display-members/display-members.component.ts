import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Member } from 'src/app/models/member.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { GoToEditService } from 'src/app/usecases/members/go-to-edit.service';
import { ListMembersPaginatedService } from 'src/app/usecases/members/list-members-paginated.service';
import { OnSelectMemberService } from 'src/app/usecases/members/on-select-member.service';
import { OrderMembersService } from 'src/app/usecases/members/order-members.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { PrintOneCredentialsService } from 'src/app/usecases/credentials/print-one-credential.service';
import { PrintOneCredentialsResource } from 'src/app/resources/credentials/print-one-credentials.resource';
import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { PrintAllCredentialsResource } from 'src/app/resources/credentials/print-all-credentials.resource';
import { DeleteMemberService } from 'src/app/usecases/members/delete-member.service';
import { CountMembersSelectedsService } from 'src/app/usecases/members/count-members-selecteds.service';
import { ToggleSelectionMembersService } from 'src/app/usecases/members/ToggleSelectionMembers.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { OnFullScreenImage } from 'src/app/utils/services/on-fullscreen-image.service';

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css'],
  providers: [
    PaginationService,
    OrderMembersService,
    ListMembersPaginatedService,
    PrintOneCredentialsService,
    PrintOneCredentialsResource,
    PrintAllCredentialsService,
    PrintAllCredentialsResource
  ]
})
export class DisplayMembersComponent implements OnInit {

  members$!: Observable<Member[]>;
  countSelecteds: number = 0;
  pagination: Pagination = new Pagination();
  allselecteds: boolean = true;
  searchValue: string = '';
  
  constructor(
    readonly router: Router,
    readonly titleService:Title,
    readonly onPaginate: PaginationService,
    readonly listMembers: ListMembersPaginatedService,
    readonly updateMember: UpdateMemberService,
    readonly count: CountMembersSelectedsService,
    readonly goToEdit: GoToEditService,
    readonly onSelect: OnSelectMemberService,
    readonly order: OrderMembersService,
    readonly onPrint: PrintOneCredentialsService,
    readonly onPrintAll: PrintAllCredentialsService,
    readonly onDelete: DeleteMemberService,
    readonly onToggleSelection: ToggleSelectionMembersService,
    readonly displayMetrics: DisplayMetricsService,
    readonly onFullScreen: OnFullScreenImage
  ) {}

  onLoad(): void {
    this.members$ = this.listMembers.run(this.pagination);
  }
  
  changePage(nextPage: number): void {
    this.pagination.page = nextPage;
    this.onLoad();
    window.scrollTo({ top: 60, behavior: 'smooth' });
  }

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.onLoad();
  }

  allSelecteds(): boolean {
    return this.countSelecteds == this.pagination.total ? true : false;
  }

  someSelecteds(): boolean {
    return this.countSelecteds > 0 && this.countSelecteds < this.pagination.total;
  }

  onSearch(keyword: string) {
    this.searchValue = keyword;
    this.pagination.search = this.searchValue;
    this.pagination.page = 0;
    this.onLoad();
  }

  ngOnInit(): void {
    this.onLoad();
    this.titleService.setTitle('Todos os membros cadastrados');
          
    this.count.run();
    this.count.done().subscribe(response => {
      this.countSelecteds = response;
    })

    this.onPrint.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })

    this.onPrintAll.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })

    this.onDelete.done().subscribe(response => {
      this.onLoad();
      this.count.run();
    })

    this.onToggleSelection.done().subscribe(response => {
      this.onLoad();
      this.count.run();
      this.displayMetrics.onUpdate();
    })

    this.onSelect.done().subscribe(response => {
      this.count.run();
      this.displayMetrics.onUpdate();
    })
  }
}