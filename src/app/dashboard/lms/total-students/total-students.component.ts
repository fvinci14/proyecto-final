import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-students',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-students.component.html',
    styleUrl: './total-students.component.scss'
})
export class TotalStudentsComponent {}