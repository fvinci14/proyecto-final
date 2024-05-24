import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.scss'
})
export class ListadoUsuariosComponent {

}
