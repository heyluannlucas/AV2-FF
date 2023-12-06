import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  template: `
  <h3>Componente Filho</h3>
  <ul>
    <li *ngFor="let item of listaItens">{{ item }}</li>
  </ul>
`,
})
export class ComponenteFilhoComponent {
  @Input() listaItens: string[] = [];
}
