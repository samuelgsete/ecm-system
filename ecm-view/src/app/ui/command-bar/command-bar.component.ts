import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {

  @Input()
  countSelecteds: number = 5;

  @Input()
  showDeleteCommand: boolean = false;

  @Input()
  showReportCommand: boolean = false;

  @Input()
  showEmitCredentialCommand: boolean = false;

  @Input()
  isVisible: boolean = true;

  @Output()
  deleteCommnad: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  reportCommnad: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  generateCredentialsCommnad: EventEmitter<void> = new EventEmitter<void>();

  protected onDelete(): void {
    this.deleteCommnad.emit()
  }

  protected onReport(): void {
    this.reportCommnad.emit()
  }

  protected onGenerateCredentials(): void {
    this.generateCredentialsCommnad.emit()
  }
}