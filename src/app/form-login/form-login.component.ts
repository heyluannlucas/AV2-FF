// form-login.component.ts
import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-form-login',
  template: `
    <div *ngIf="!autenticado; else areaLogada">
      <h2>Formulário de Login</h2>
      <label for="email">E-mail:</label>
      <input type="email" id="email" [(ngModel)]="email" />

      <label for="senha">Senha:</label>
      <input type="password" id="senha" [(ngModel)]="senha" />

      <button (click)="fazerLogin()">Fazer Login</button>
    </div>

    <ng-template #areaLogada>
      <app-area-logada [email]="email" (logout)="fazerLogout()"></app-area-logada>
    </ng-template>
  `,
})
export class FormLoginComponent {
  autenticado: boolean = false;
  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService) {
    this.loginService.autenticado$.subscribe((autenticado) => {
      this.autenticado = autenticado;
    });
  }

  fazerLogin() {
    this.loginService.fazerLogin(this.email, this.senha);
  }

  fazerLogout() {
    this.loginService.fazerLogout();
  }
}