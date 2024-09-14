import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'; // Importamos el SidebarComponent
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../../modules/material.module';
import { ContentComponent } from './content/content.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MaterialModule, ContentComponent, SidebarComponent, TopbarComponent, RouterOutlet], // Añadir Sidebar y Topbar
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
