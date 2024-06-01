import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tutor',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.scss'
})
export class TutorComponent {

}
