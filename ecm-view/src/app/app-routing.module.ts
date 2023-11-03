import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayMembersComponent } from './components/members/display-members/display-members.component';
import { DisplayRolesComponent } from './components/roles/display-roles/display-roles.component';
import { DisplayCongregationsComponent } from './components/congregations/display-congregations/display-congregations.component';
import { UpdateMemberComponent } from './components/members/update-member/update-member.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateMember2Component } from './components/members/create-member2/create-member2.component';
import { DisplayThemesComponent } from './components/credential-themes/display-themes/display-themes.component';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { CroppedImageComponent } from './components/uploads-images/cropped-image/cropped-image.component';
import { CreateFieldComponent } from './components/fields/create-field/create-field.component';

const routes: Routes = [
  { path: 'app', component: LayoutComponent, children: [
    { path: 'roles', component: DisplayRolesComponent },
    { path: 'congregations', component: DisplayCongregationsComponent },
    { path: 'members', component: DisplayMembersComponent },
    { path: 'create/member', component: CreateMember2Component },
    { path: 'member/:id/update', component: UpdateMemberComponent },
    { path: 'credential/themes', component: DisplayThemesComponent },
    { path: 'create/field', component: CreateFieldComponent },
  ]},
  { path: 'cropped/image', component: CroppedImageComponent },
  { path:'**', redirectTo: '404' },
  { path:'404', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}