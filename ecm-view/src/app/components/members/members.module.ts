import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginateModule } from '../paginate/paginate.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { LayoutModule } from 'src/app/layout/layout.module';

import { DisplayMembersComponent } from './display-members/display-members.component';
import { Step1Component } from './create-member2/step1/step1.component';
import { Step2Component } from './create-member2/step2/step2.component';
import { Step3Component } from './create-member2/step3/step3.component';
import { Step4Component } from './create-member2/step4/step4.component';
import { UpdateStep1Component } from './update-member/update-step1/update-step1.component';
import { UpdateStep2Component } from './update-member/update-step2/update-step2.component';
import { UpdateStep3Component } from './update-member/update-step3/update-step3.component';
import { UpdateStep4Component } from './update-member/update-step4/update-step4.component';
import { CreateMember2Component } from './create-member2/create-member2.component';
import { UpdateMemberComponent } from './update-member/update-member.component';

import { CreateMemberResource } from 'src/app/resources/members/create-member.resource';
import { ListMembersPaginatedResource } from 'src/app/resources/members/list-members-paginated.resource';
import { FindOneMemberResource } from 'src/app/resources/members/find-one-member.resource';
import { UpdateMemberResource } from 'src/app/resources/members/update-member.resource';
import { ListMembersSelectedsResource } from 'src/app/resources/members/list-members-selecteds.resource';
import { ToggleSelectionMembersResource } from 'src/app/resources/members/ToggleSelectionMembers.resource';
import { CountMembersSelectedsResource } from 'src/app/resources/members/count-members-selecteds.resource';

import { CreateMemberService } from 'src/app/usecases/members/create-member.service';
import { FindOneMemberService } from 'src/app/usecases/members/find-one-member.service';
import { UpdateMemberService } from 'src/app/usecases/members/update-member.service';
import { GetFormDataMemberService } from 'src/app/usecases/members/get-form-data-member.service';
import { GoToEditService } from 'src/app/usecases/members/go-to-edit.service';
import { GoToPrintService } from 'src/app/usecases/members/go-to-print.service';
import { OnSelectMemberService } from 'src/app/usecases/members/on-select-member.service';
import { ListMembersSelectedsService } from 'src/app/usecases/members/list-members-selecteds.service';
import { DeleteMemberService } from 'src/app/usecases/members/delete-member.service';
import { DeleteMemberResource } from 'src/app/resources/members/delete-member.resource';
import { CountMembersSelectedsService } from 'src/app/usecases/members/count-members-selecteds.service';
import { ToggleSelectionMembersService } from 'src/app/usecases/members/ToggleSelectionMembers.service';
import { BuildFormMemberStep1 } from 'src/app/usecases/members/build-form-member-step1.service';
import { BuildFormMemberStep2 } from 'src/app/usecases/members/build-form-member-step2.service';
import { BuildFormMemberStep3 } from 'src/app/usecases/members/build-form-member-step3.service';
import { BuildFormMemberStep4 } from 'src/app/usecases/members/build-form-member-step4.service';
import { BuildFormMember } from 'src/app/usecases/members/build-form-member.service';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [
    DisplayMembersComponent,
    UpdateMemberComponent,
    CreateMember2Component,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    UpdateStep1Component,
    UpdateStep2Component,
    UpdateStep3Component,
    UpdateStep4Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginateModule,
    LayoutModule,
    SharedModule,
    UploadsImagesModule,
    UtilsModule,
    UiModule
  ],
  providers: [
    FindOneMemberResource,
    FindOneMemberService,
    CreateMemberResource,
    CreateMemberService,
    ListMembersPaginatedResource,
    UpdateMemberResource,
    UpdateMemberService,
    GoToEditService,
    GoToPrintService,
    OnSelectMemberService,
    GetFormDataMemberService,
    ListMembersSelectedsResource,
    ListMembersSelectedsService,
    DeleteMemberResource,
    DeleteMemberService,
    CountMembersSelectedsResource,
    CountMembersSelectedsService,
    ToggleSelectionMembersResource,
    ToggleSelectionMembersService,
    BuildFormMemberStep1,
    BuildFormMemberStep2,
    BuildFormMemberStep3,
    BuildFormMemberStep4,
    BuildFormMember
  ]
})
export class MembersModule {}