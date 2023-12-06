import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html'
})
export class AreaLogadaComponent {
  @Input() email: string = '';
  @Output() logout = new EventEmitter<void>();
}