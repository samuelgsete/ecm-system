import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Member } from 'src/app/models/member.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Paginate } from 'src/app/models/paginate.entity';
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

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css'],
  providers: [
    PrintOneCredentialsService,
    PrintOneCredentialsResource,
    PrintAllCredentialsService,
    PrintAllCredentialsResource
  ]
})
export class DisplayMembersComponent implements OnInit {

  members: Member[] = [];
  countSelecteds: number = 0;
  pagination: Pagination = new Pagination();
  formSearch: FormControl = new FormControl();
  allselecteds: boolean = true;
  
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
    readonly onToggleSelection: ToggleSelectionMembersService
  ) {}
  
  nextPage(page: number): void {
    this.pagination.page = page;
    this.listMembers.run(this.pagination);
  }

  allSelecteds(): boolean {
    return this.countSelecteds == this.pagination.total ? true : false;
  }

  someSelecteds(): boolean {
    return this.countSelecteds > 0 && this.countSelecteds < this.pagination.total;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Todos os membros cadastrados');
    this.listMembers.run(this.pagination);
    this.listMembers.done().subscribe(response => {
      this.members = response.content;
      this.pagination.page = response.number
      this.pagination.total = response.totalElements     
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.listMembers.run(new Pagination({ search: keyword.toLowerCase() }))
    })

    this.count.run();
    this.count.done().subscribe(response => {
      this.countSelecteds = response;
    })

    this.updateMember.done().subscribe(response => {
      this.listMembers.run(this.pagination);
      this.count.run();
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
      this.listMembers.run(new Pagination());
      this.count.run();
    })

    this.onToggleSelection.done().subscribe(response => {
      this.listMembers.run(new Pagination());
      this.count.run();
    })
  }
}