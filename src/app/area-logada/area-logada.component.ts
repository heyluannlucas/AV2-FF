import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  template: `
    <div *ngIf="email">
      <p>Você tem permissão de usuário</p>
      <p>Email: {{ email }}</p>
      <button (click)="logout.emit()">Sair</button>
    </div>
  `,
})
export class AreaLogadaComponent {
  @Input() email: string = '';
  @Output() logout = new EventEmitter<void>();
}