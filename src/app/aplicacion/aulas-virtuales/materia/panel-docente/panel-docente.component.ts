import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AsistenciaMateriaComponent } from './asistencia-materia/asistencia-materia.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { LibroTemasComponent } from './libro-temas/libro-temas.component';
import { ProcesosEvaluativosComponent } from './procesos-evaluativos/procesos-evaluativos.component';

@Component({
  selector: 'app-panel-docente',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, AsistenciaMateriaComponent, ComunicadosComponent, LibroTemasComponent, ProcesosEvaluativosComponent],
  templateUrl: './panel-docente.component.html',
  styleUrl: './panel-docente.component.scss'
})
export class PanelDocenteComponent {

}
