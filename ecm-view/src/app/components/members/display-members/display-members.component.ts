import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Member } from 'src/app/models/member.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { GoToEditService } from 'src/app/usecases/members/go-to-edit.service';
import { ListMembersPaginatedService } from 'src/app/usecases/members/list-members-paginated.service';
import { SelectOrUnselectMemberService } from 'src/app/usecases/members/select-or-unselect-member.service';
import { OrderMembersService } from 'src/app/usecases/members/order-members.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { PrintOneCredentialsService } from 'src/app/usecases/credentials/print-one-credential.service';
import { PrintOneCredentialsResource } from 'src/app/resources/credentials/print-one-credentials.resource';
import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { PrintAllCredentialsResource } from 'src/app/resources/credentials/print-all-credentials.resource';
import { DeleteMemberService } from 'src/app/usecases/members/delete-member.service';
import { SelectOrUnselectAllMembersService } from 'src/app/usecases/members/select-or-unselect-all-members.service';
import { DisplayMetricsService } from 'src/app/usecases/metrics/display-metrics.service';
import { OnFullScreenImage } from 'src/app/utils/services/on-fullscreen-image.service';
import { CountMembersService } from 'src/app/usecases/members/count-members.service';
import { CountElements } from 'src/app/utils/models/count-elements.entity';

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
  pagination: Pagination = new Pagination();
  countElements = new CountElements();
    
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly titleService:Title,
    protected readonly onPaginate: PaginationService,
    protected readonly listMembers: ListMembersPaginatedService,
    protected readonly updateMember: UpdateMemberService,
    protected readonly onCount: CountMembersService,
    protected readonly goToEdit: GoToEditService,
    protected readonly selectOrUnselectOne: SelectOrUnselectMemberService,
    protected readonly order: OrderMembersService,
    protected readonly onPrint: PrintOneCredentialsService,
    protected readonly onPrintAll: PrintAllCredentialsService,
    protected readonly onDelete: DeleteMemberService,
    protected readonly selectOrUnselectAll: SelectOrUnselectAllMembersService,
    protected readonly displayMetrics: DisplayMetricsService,
    protected readonly onFullScreen: OnFullScreenImage
  ) {}

  onLoad(): void {
    this.members$ = this.listMembers.run(this.pagination);
  }
  
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

  changeOrdination(ordination: string): void {
    this.pagination.ordination = ordination;
    this.onLoad();
  }

  handleDeleteMany(): void {
    alert('deletando..');
  }

  handleGenerateCredentials() {
    this.onPrintAll.run()
  }

  handleSelectOrUnselectAll(isSelected: boolean): void {
    this.selectOrUnselectAll.run(isSelected);
  }

  handleSelectOrUnselectOne(isSelected: boolean, id: string): void {
    this.selectOrUnselectOne.run(id, isSelected);
  }

  handleSearch(keyword: string) {
    this.pagination.search = keyword.toLowerCase();
    this.pagination.pageCurrent = 0;
    this.onLoad();
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
    this.titleService.setTitle('Todos os membros cadastrados');
          
    this.onCount.run();
    this.onCount.isDone.subscribe(response => {
      this.countElements = response;
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
      this.onCount.run();
    })

    this.selectOrUnselectAll.isDone.subscribe(response => {
      this.onLoad();
      this.onCount.run();
      this.displayMetrics.onUpdate();
    })

    this.selectOrUnselectOne.isDone.subscribe(response => {
      this.onCount.run();
      this.displayMetrics.onUpdate();
    })
  }
}