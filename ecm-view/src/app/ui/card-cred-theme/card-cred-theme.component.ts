import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CredentialTheme } from 'src/app/models/credential-theme.entity';

@Component({
  selector: 'ui-card-cred-theme',
  templateUrl: './card-cred-theme.component.html',
  styleUrls: ['./card-cred-theme.component.css']
})
export class CardCredThemeComponent {

  @Input() credTheme!: CredentialTheme;
  @Output() onActive: EventEmitter<void> = new EventEmitter<void>();

  /*
    Notifica o componente pai o tema que deve ser ativado
  */
  activeTheme(): void {
    this.onActive.emit()
  }
}