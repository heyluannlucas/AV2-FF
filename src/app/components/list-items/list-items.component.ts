import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  lista: string[] = ['item 1', 'item 2', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];
}
