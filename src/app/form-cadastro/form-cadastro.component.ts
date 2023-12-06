import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html'
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
      this.ResetCampos()
    } else {
      this.mensagem = `Olá, informe os campos corretamente.`
    }
  }

  ResetCampos (){
    this.nome = ''
    this.email = ''
    this.senha = ''
  }

}
