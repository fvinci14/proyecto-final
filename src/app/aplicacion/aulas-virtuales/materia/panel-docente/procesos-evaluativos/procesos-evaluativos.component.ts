import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ListadoProcesosComponent } from './listado-procesos/listado-procesos.component';
import { NuevoProcesoComponent } from './nuevo-proceso/nuevo-proceso.component';

@Component({
  selector: 'app-procesos-evaluativos',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, ListadoProcesosComponent, NuevoProcesoComponent],
  templateUrl: './procesos-evaluativos.component.html',
  styleUrl: './procesos-evaluativos.component.scss'
})
export class ProcesosEvaluativosComponent {

}
