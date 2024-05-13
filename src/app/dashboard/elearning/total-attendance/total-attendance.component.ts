import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-attendance',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './total-attendance.component.html',
    styleUrl: './total-attendance.component.scss'
})
export class TotalAttendanceComponent {}