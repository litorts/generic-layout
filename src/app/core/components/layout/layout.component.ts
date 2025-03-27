import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'; // Importamos el SidebarComponent
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../../modules/material.module';
import { ContentComponent } from './content/content.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MaterialModule, ContentComponent, SidebarComponent, TopbarComponent, RouterOutlet, RouterLink], // Añadir Sidebar y Topbar
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  nombre : string | null = "BiVenta"
  toggleSidebar() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
  cambiarNombre(){
    this.nombre += "+1";
  }
  constructor( public _router: Router)
  {

  }
  testNavigation() {
    this._router.navigate(['/sales']);
    this._router.navigate(['/inventory']);
  }
}
