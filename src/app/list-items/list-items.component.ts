import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  marked:number[]=[]
  valor:string=''

  list: string[] = ["Fazer Lista", "Continuar Estudando", "Descansar a Vista", "Fazer Documentação", "Ler algum Livro"];
  delete(index:number){
    this.list.splice(index,1)
    let presence = this.marked.indexOf(index)
    if(presence!=-1){
      this.marked.splice(presence,1)
    }
  }
  done(index:number){
    let presence = this.marked.indexOf(index)
    if(presence===-1){
      this.marked.push(index)
    }
  }
  add(){
    this.list.push(this.valor)
  }
}
