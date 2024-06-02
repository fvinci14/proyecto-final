import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NuevoProcesoComponent } from './nuevo-proceso/nuevo-proceso.component';

@Component({
  selector: 'app-procesos-evaluativos',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, NuevoProcesoComponent],
  templateUrl: './procesos-evaluativos.component.html',
  styleUrl: './procesos-evaluativos.component.scss'
})
export class ProcesosEvaluativosComponent {

}
