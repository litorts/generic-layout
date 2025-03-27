import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../../modules/material.module';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Output() toggleSidenav: EventEmitter<null> = new EventEmitter<null>();
  constructor()
  {
    let comida = "arroz";
    let postre : any 
    if( comida != null)
    {
      let caca;
      var variable  = 1
    }
    postre = 1
    postre = "caca"
    postre = new Date()
    var desayuno = "breakfast"
  }
}
