import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TomaAsistenciaComponent } from './toma-asistencia/toma-asistencia.component';

@Component({
  selector: 'app-asistencia-materia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, TomaAsistenciaComponent],
  templateUrl: './asistencia-materia.component.html',
  styleUrl: './asistencia-materia.component.scss'
})
export class AsistenciaMateriaComponent {

}
