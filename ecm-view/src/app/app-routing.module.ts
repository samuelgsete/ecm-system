import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayMembersComponent } from './components/members/display-members/display-members.component';
import { DisplayRolesComponent } from './components/roles/display-roles/display-roles.component';
import { DisplayCongregationsComponent } from './components/congregations/display-congregations/display-congregations.component';
import { UpdateMemberComponent } from './components/members/update-member/update-member.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateMember2Component } from './components/members/create-member2/create-member2.component';
import { PageNotfoundComponent } from './utils/components/page-notfound/page-notfound.component';
import { SettingsSystemComponent } from './components/settings/settings-system/settings-system.component';
import { SetShepherdComponent } from './components/settings/set-shepherd/set-shepherd.component';
import { UpdateShepherdComponent } from './components/settings/update-shepherd/update-shepherd.component';
import { DisplayThemesComponent } from './components/settings/display-themes/display-themes.component';

const routes: Routes = [
  { path: 'app', component: LayoutComponent, children: [
    { path: 'roles', component: DisplayRolesComponent },
    { path: 'congregations', component: DisplayCongregationsComponent },
    { path: 'members', component: DisplayMembersComponent },
    { path: 'create/member', component: CreateMember2Component },
    { path: 'members/:id/update', component: UpdateMemberComponent },
    { path: 'templates', component: SettingsSystemComponent },
    { path: 'set/shepherd', component: SetShepherdComponent },
    { path: 'shepherd/update', component: UpdateShepherdComponent }
  ]},
  { path: 'themes', component: DisplayThemesComponent },
  { path:'**', redirectTo: '404' },
  { path:'404', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}