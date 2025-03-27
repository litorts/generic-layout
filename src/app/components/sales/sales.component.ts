import { Component } from '@angular/core';
import { MaterialModule } from '../../core/modules/material.module';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}