import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  template: `
    <div>
      <h2>Formulário de Cadastro</h2>
      <label for="nome">Nome:</label>
      <input type="nome" id="nome" [(ngModel)]="nome" />

      <label for="email">E-mail:</label>
      <input type="email" id="email" [(ngModel)]="email" />

      <label for="senha">Senha:</label>
      <input type="password" id="senha" [(ngModel)]="senha" />
      <div [ngStyle]="{'background-color': this.mensagem != 'Olá, informe os campos corretamente.' ? '#66FF99': '#FFCCCB'}" >{{mensagem}}</div>
      
      <button (click)="validaCadastro()">Fazer Cadastro</button>
    </div>
  `,
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagem: string = '';

  validaCadastro(){

    const validacao = this.nome != '' && this.email != '' && this.senha != '';

    if(validacao){
      this.mensagem = `Olá, ${this.nome}, seu cadastro foi realizado com sucesso.`;
    } else {
      this.mensagem = `Olá, informe os campos corretamente.`
    }
  }

}
