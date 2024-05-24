import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-componer',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './componer.component.html',
  styleUrl: './componer.component.scss'
})
export class ComponerComponent {

}
