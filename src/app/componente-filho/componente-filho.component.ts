import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html'
})
export class ComponenteFilhoComponent {
  @Input() listaItens: string[] = [];
}
