import { Component } from '@angular/core';

@Component({
  selector: 'ui-user-logged-skeleton',
  templateUrl: './ui-user-logged-skeleton.component.html',
  styleUrls: ['./ui-user-logged-skeleton.component.css']
})
export class UiUserLoggedSkeletonComponent {

  name: string = 'Usuário';
  email: string = 'usuario1234@email.com';

}