import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/role.entity';
import { Congregation } from 'src/app/models/congregation.entity';
import { ListGendersService } from 'src/app/utils/services/list-genders.service';
import { FindAllCongregationsService } from 'src/app/usecases/congregations/find-all-congregations.service';
import { ListMaritalStatusService } from 'src/app/utils/services/list-marital-status.service';
import { IFormMemberStep1 } from 'src/app/usecases/members/interfaces/form-member-step1.interface';
import { FindAllRolesService } from 'src/app/usecases/roles/find-all-roles.service';

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
    protected readonly findAllRoles: FindAllRolesService,
    protected readonly findAllCongregations: FindAllCongregationsService,
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
}