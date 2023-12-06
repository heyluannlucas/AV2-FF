import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  marked:number[]=[]
  valor:string=''

  list: string[] = ["Treinar", "Estudar",  "trabalhar", "Ler"];
  delete(index:number){
    this.list.splice(index,1)
    let presence = this.marked.indexOf(index)
    
  }
  done(index:number){
    let presence = this.marked.indexOf(index)
    if(presence===-1){
      this.marked.push(index)
    }
    else{
      this.marked.splice(presence,1)
    }
  }
  add(){
    if(this.valor !== ''){
      this.list.push(this.valor)
      this.valor = ''
    }
  }
}
