import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-accredited-students',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './accredited-students.component.html',
    styleUrl: './accredited-students.component.scss'
})
export class AccreditedStudentsComponent {}