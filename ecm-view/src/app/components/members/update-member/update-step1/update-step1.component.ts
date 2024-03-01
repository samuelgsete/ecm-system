import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/role.entity';
import { Congregation } from 'src/app/models/congregation.entity';
import { ListGendersService } from 'src/app/utils/services/list-genders.service';
import { ListMaritalStatusService } from 'src/app/utils/services/list-marital-status.service';
import { SelectRoleComparatorService } from 'src/app/usecases/roles/select-role-comparator.service';
import { SelectCongregationComparatorService } from 'src/app/usecases/congregations/select-congregation-comparator.service';
import { IFormMemberStep1 } from 'src/app/usecases/members/interfaces/form-member-step1.interface';
import { FindAllCongregationsService } from 'src/app/usecases/congregations/find-all-congregations.service';
import { FindAllRolesService } from 'src/app/usecases/roles/find-all-roles.service';

@Component({
  selector: 'app-update-step1',
  templateUrl: './update-step1.component.html',
  styleUrls: ['./update-step1.component.css']
})
export class UpdateStep1Component implements OnInit {

  @Input() 
  form!: FormGroup<IFormMemberStep1>;

  roles$!: Observable<Role[]>;
  congregations$!: Observable<Congregation[]>;
  
  constructor(
    protected readonly listGenders: ListGendersService,
    protected readonly listMaritalStatus: ListMaritalStatusService,
    protected readonly findAllRoles: FindAllRolesService,
    protected readonly roleComparator: SelectRoleComparatorService,
    protected readonly findAllCongregations: FindAllCongregationsService,
    protected readonly congregationComparator: SelectCongregationComparatorService
  ) {}

  openSelectionRoles(): void {
    !this.roles$ && this.loadRoles();
  }

  openSelectionCongregations(): void {
    !this.congregations$ && this.loadCongregations();
  }

  protected loadRoles(): void {
    this.roles$ = this.findAllRoles.run();
  }

  protected loadCongregations(): void {
    this.congregations$ = this.findAllCongregations.run();
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadCongregations();
  }
}