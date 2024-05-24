import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-autenticacion',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './autenticacion.component.html',
    styleUrl: './autenticacion.component.scss'
})
export class AutenticacionComponent {}