// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private autenticadoSubject = new BehaviorSubject<boolean>(false);
  autenticado$: Observable<boolean> = this.autenticadoSubject.asObservable();

  fazerLogin(email: string, senha: string): Observable<boolean> {
    const autenticado = email === 'usuario@exemplo.com' && senha === 'senha123';
    this.autenticadoSubject.next(autenticado);
    return this.autenticado$;
  }

  fazerLogout(): void {
    this.autenticadoSubject.next(false);
  }
}