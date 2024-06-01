import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ListadoTemasComponent } from './listado-temas/listado-temas.component';
import { NuevoTemaComponent } from './nuevo-tema/nuevo-tema.component';

@Component({
  selector: 'app-libro-temas',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, ListadoTemasComponent, NuevoTemaComponent],
  templateUrl: './libro-temas.component.html',
  styleUrl: './libro-temas.component.scss'
})
export class LibroTemasComponent {

}
