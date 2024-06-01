import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ListadoAsistenciaComponent } from './listado-asistencia/listado-asistencia.component';
import { TomaAsistenciaComponent } from './toma-asistencia/toma-asistencia.component';

@Component({
  selector: 'app-asistencia-materia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, ListadoAsistenciaComponent, TomaAsistenciaComponent],
  templateUrl: './asistencia-materia.component.html',
  styleUrl: './asistencia-materia.component.scss'
})
export class AsistenciaMateriaComponent {

}
