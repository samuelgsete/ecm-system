import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/role.entity';
import { Congregation } from 'src/app/models/congregation.entity';
import { ListGendersService } from 'src/app/utils/services/list-genders.service';
import { ListMaritalStatusService } from 'src/app/utils/services/list-marital-status.service';
import { ListCongregationsPaginatedService } from 'src/app/usecases/congregations/list-congregations-paginated.service';
import { ListRolesPaginatedService } from 'src/app/usecases/roles/list-roles-paginated.service';
import { Pagination } from 'src/app/models/pagination.entity';
import { IFormMemberStep1 } from 'src/app/usecases/members/interfaces/form-member-step1.interface';

const SIZE_PAGINATION = 120;

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component {

  @Input() public form!: FormGroup<IFormMemberStep1>;

  roles$!: Observable<Role[]>;
  congregations$!: Observable<Congregation[]>;
      
  constructor(
    protected readonly listGenders: ListGendersService,
    protected readonly listMaritalStatus: ListMaritalStatusService,
    protected readonly listRoles: ListRolesPaginatedService,
    protected readonly listCongregations: ListCongregationsPaginatedService,
  ) {}

  
  openSelectionRoles(): void {
    !this.roles$ && this.loadRoles();
  }

  openSelectionCongregations(): void {
    !this.congregations$ && this.loadCongregations();
  }

  protected loadRoles(): void {
    this.roles$ = this.listRoles.run(new Pagination({ size: SIZE_PAGINATION }));
  }

  protected loadCongregations(): void {
    this.congregations$ = this.listCongregations.run(new Pagination({ size: SIZE_PAGINATION }));
  }
}