import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-supervised-courses',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './supervised-courses.component.html',
    styleUrl: './supervised-courses.component.scss'
})
export class SupervisedCoursesComponent {}