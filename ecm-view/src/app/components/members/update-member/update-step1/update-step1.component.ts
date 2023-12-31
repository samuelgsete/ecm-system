import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Role } from 'src/app/models/role.entity';
import { Congregation } from 'src/app/models/congregation.entity';
import { ListGendersService } from 'src/app/utils/services/list-genders.service';
import { ListMaritalStatusService } from 'src/app/utils/services/list-marital-status.service';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { Pagination } from 'src/app/models/pagination.entity';
import { SelectRoleComparatorService } from 'src/app/usecases/roles/select-role-comparator.service';
import { SelectCongregationComparatorService } from 'src/app/usecases/congregations/select-congregation-comparator.service';

const SIZE_PAGINATION = 120;

@Component({
  selector: 'app-update-step1',
  templateUrl: './update-step1.component.html',
  styleUrls: ['./update-step1.component.css']
})
export class UpdateStep1Component implements OnInit {

  @Input() 
  form!: FormGroup;

  roles: Role[] = [];
  congregations: Congregation[] = []
  
  constructor(
    protected readonly listGenders: ListGendersService,
    protected readonly listMaritalStatus: ListMaritalStatusService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly roleComparator: SelectRoleComparatorService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
    protected readonly congregationComparator: SelectCongregationComparatorService
  ) {}

  ngOnInit(): void {
    this.listRoles.run(new Pagination({ size: SIZE_PAGINATION }));
    this.listRoles.done().subscribe(response => {
      this.roles = response.content;
    })
    this.listCongregations.run(new Pagination({ size: SIZE_PAGINATION }));
    this.listCongregations.done().subscribe(response => {
      this.congregations = response.content;
    });
  }
}