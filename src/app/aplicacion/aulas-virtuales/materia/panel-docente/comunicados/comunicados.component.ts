import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ListadoComunicadosComponent } from './listado-comunicados/listado-comunicados.component';
import { NuevoComunicadoComponent } from './nuevo-comunicado/nuevo-comunicado.component';

@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, ListadoComunicadosComponent, NuevoComunicadoComponent],
  templateUrl: './comunicados.component.html',
  styleUrl: './comunicados.component.scss'
})
export class ComunicadosComponent {

}
