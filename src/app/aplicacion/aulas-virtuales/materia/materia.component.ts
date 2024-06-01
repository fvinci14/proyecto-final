import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ContenidosComponent } from './contenidos/contenidos.component';
import { PanelDocenteComponent } from './panel-docente/panel-docente.component';
import { TutorComponent } from './tutor/tutor.component';

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, RouterLink, RouterOutlet, ContenidosComponent, PanelDocenteComponent, TutorComponent],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.scss'
})
export class MateriaComponent {

}
