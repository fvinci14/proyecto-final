import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './listado-cursos.component.html',
  styleUrl: './listado-cursos.component.scss'
})
export class ListadoCursosComponent {

}
