import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})
export class ContadorComponentComponent {
  valor:number 
  constructor(){
    this.valor = 0
  }
  aumentar(){
    this.valor++
  }
  diminuir(){
    if(this.valor>0){
      this.valor--
    }
  }
}
