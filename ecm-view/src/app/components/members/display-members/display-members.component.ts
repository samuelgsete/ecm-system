import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Member } from 'src/app/models/member.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { GoToEditService } from 'src/app/usecases/members/go-to-edit.service';
import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';
import { ListMembersPaginatedService } from 'src/app/usecases/members/list-members-paginated.service';
import { OnSelectMemberService } from 'src/app/usecases/members/on-select-member.service';
import { OrdinationsMembersService } from 'src/app/usecases/members/ordinations-members.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css']
})
export class DisplayMembersComponent implements OnInit {

  protected members: Member[] = [];
  protected pagination: Pagination = new Pagination({ size: 5 });
  protected totalElements: number = 0;
  protected formSearch: FormControl = new FormControl();

  public constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly listMembers: ListMembersPaginatedService,
    protected readonly updateMember: UpdateMemberService,
    protected readonly goToPrint: GoToPrintService,
    protected readonly goToEdit: GoToEditService,
    protected readonly onSelect: OnSelectMemberService,
    protected readonly ordinations: OrdinationsMembersService
  ) {}

  orderBy(ordination: string): void {
    this.pagination.ordination = ordination;
    this.listMembers.run(this.pagination);
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'] || 0;
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listMembers.run(this.pagination);
    })

    this.listMembers.done().subscribe(response => {
      this.members = response.content;
      this.totalElements = response.totalElements;
      this.router.navigate([], { 
        queryParams: {  currentPage: response.number, numberOfPages: response.totalPages },
        queryParamsHandling: 'merge'
      })
    })
    
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.router.navigate([], { 
        queryParams: { search: keyword.toLowerCase(), currentPage: 0 },
        queryParamsHandling: 'merge'
      });
    });

    this.updateMember.done().subscribe(response => {
      this.listMembers.run(this.pagination);
    })
  }
}