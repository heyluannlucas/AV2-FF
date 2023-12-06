import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-acesso',
  template: `
    <h2>Controle de Acesso</h2>
    
    <button (click)="selecionarTipo('administrador')">Administrador</button>
    <button (click)="selecionarTipo('colaborador')">Colaborador</button>
    <button (click)="selecionarTipo('usuario')">Usuário</button>
    
    <div *ngIf="tipoSelecionado === 'administrador'">
      <p>Você tem permissão de administrador</p>
    </div>
    
    <div *ngIf="tipoSelecionado === 'colaborador'">
      <p>Você tem permissão de colaborador</p>
    </div>
    
    <div *ngIf="tipoSelecionado === 'usuario'">
      <p>Você tem permissão de usuário</p>
    </div>
  `,
})
export class ControleAcessoComponent {
  tipoSelecionado: string = '';

  selecionarTipo(tipo: string) {
    this.tipoSelecionado = tipo;
  }
}