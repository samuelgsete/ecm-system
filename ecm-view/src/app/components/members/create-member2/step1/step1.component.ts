import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Role } from 'src/app/models/role.entity';
import { Congregation } from 'src/app/models/congregation.entity';
import { ListGendersService } from 'src/app/shared/usecases/list-genders.service';
import { ListMaritalStatusService } from 'src/app/shared/usecases/list-marital-status.service';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { Pagination } from 'src/app/models/pagination.entity';

const SIZE_PAGINATION = 120;

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  @Input() public form!: FormGroup;

  protected roles: Role[] = [];
  protected congregations: Congregation[] = []
  
  public constructor(
    protected readonly listGenders: ListGendersService,
    protected readonly listMaritalStatus: ListMaritalStatusService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
  ) {}

  public ngOnInit(): void {
    console.log(this.form);
    this.listRoles.run(new Pagination({ size: SIZE_PAGINATION }));
    this.listRoles.done().subscribe(response => {
      this.roles = response.content
    })
    this.listCongregations.run(new Pagination({ size: SIZE_PAGINATION }));
    this.listCongregations.done().subscribe(response => {
      this.congregations = response.content;
    })
  }
}