import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Member } from 'src/app/models/member.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Paginate } from 'src/app/models/paginate.entity';
import { GoToEditService } from 'src/app/usecases/members/go-to-edit.service';
import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';
import { ListMembersPaginatedService } from 'src/app/usecases/members/list-members-paginated.service';
import { OnSelectMemberService } from 'src/app/usecases/members/on-select-member.service';
import { OrderMembersService } from 'src/app/usecases/members/order-members.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';
import { PaginationService } from '../../paginate/pagination/pagination.service';
import { PrintOneCredentialsService } from 'src/app/usecases/credentials/print-one-credential.service';
import { PrintOneCredentialsResource } from 'src/app/resources/credentials/print-one-credentials.resource';
import { PrintAllCredentialsService } from 'src/app/usecases/credentials/print-all-credentials.service';
import { PrintAllCredentialsResource } from 'src/app/resources/credentials/print-all-credentials.resource';

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
  pagination: Pagination = new Pagination({ size: 6 });
  formSearch: FormControl = new FormControl();

  constructor(
    readonly router: Router,
    readonly onPaginate: PaginationService,
    readonly listMembers: ListMembersPaginatedService,
    readonly updateMember: UpdateMemberService,
    readonly goToPrint: GoToPrintService,
    readonly goToEdit: GoToEditService,
    readonly onSelect: OnSelectMemberService,
    readonly order: OrderMembersService,
    readonly onPrint: PrintOneCredentialsService,
    readonly onPrintAll: PrintAllCredentialsService
  ) {}
  
  nextPage(page: number): void {
    this.pagination.page = page;
    this.listMembers.run(this.pagination);
  }

  ngOnInit(): void {
    this.listMembers.run(this.pagination);
    this.listMembers.done().subscribe(response => {
      this.members = response.content;
      this.countSelecteds = this.members.filter(member => member.isSelected).length;
      this.pagination.page = response.number     
      this.onPaginate.onBuild(new Paginate({
        currentPage: response.number,
        totalElements: response.totalElements,
        totalPages: response.totalPages
      }))
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.listMembers.run(new Pagination({ 
        size: 6, search: keyword.toLowerCase() 
      }))
    })

    this.updateMember.done().subscribe(response => {
      this.listMembers.run(this.pagination);
    })

    this.onPrint.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })

    this.onPrintAll.done().subscribe(htmlContent => {
      let newWindow = open();
      newWindow?.document.write(htmlContent || "ERRO 404: Not Found");
    })
  }
}