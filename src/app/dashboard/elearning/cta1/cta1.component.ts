import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ButtonsComponent } from '../../../aplicacion/ui-elements/buttons/buttons.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-cta1',
    standalone: true,
    imports: [MatIcon, MatButton, ButtonsComponent, MatCardModule, RouterLink],
    templateUrl: './cta1.component.html',
    styleUrl: './cta1.component.scss'
})
export class Cta1Component {}