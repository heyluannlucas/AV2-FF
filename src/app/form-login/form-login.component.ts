// form-login.component.ts
import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
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
    this.senha = '';
  }

  fazerLogout() {
    this.loginService.fazerLogout();
  }
}