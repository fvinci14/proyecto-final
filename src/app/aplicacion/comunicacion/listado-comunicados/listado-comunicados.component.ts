import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listado-comunicados',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './listado-comunicados.component.html',
  styleUrl: './listado-comunicados.component.scss'
})
export class ListadoComunicadosComponent {

}
