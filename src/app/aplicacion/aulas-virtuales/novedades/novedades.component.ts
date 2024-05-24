import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.scss'
})
export class NovedadesComponent {

}
