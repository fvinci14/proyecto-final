import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatIcon } from '@angular/material/icon';

export interface CalificacionData {
  calificacion: string;
  fecha: string;
  tipo: string;
  materia: string;
  docente: string;
}

const CALIFICACIONES_DATA: CalificacionData[] = [
  // SIC I
  { calificacion: '8', fecha: '10/05/2024', tipo: 'Escrito individual', materia: 'SIC I', docente: 'P. Cais' },
  { calificacion: 'Bien', fecha: '15/05/2024', tipo: 'Oral individual', materia: 'SIC I', docente: 'P. Cais' },
  { calificacion: 'Excelente', fecha: '20/05/2024', tipo: 'Trabajo práctico', materia: 'SIC I', docente: 'P. Cais' },

  // NTICX
  { calificacion: '9', fecha: '11/05/2024', tipo: 'Escrito individual', materia: 'NTICX', docente: 'F. Vinciguerra' },
  { calificacion: 'Muy bien', fecha: '16/05/2024', tipo: 'Oral grupal', materia: 'NTICX', docente: 'F. Vinciguerra' },
  { calificacion: '10', fecha: '21/05/2024', tipo: 'Recuperatorio', materia: 'NTICX', docente: 'F. Vinciguerra' },

  // Matematica
  { calificacion: '6', fecha: '12/05/2024', tipo: 'Escrito grupal', materia: 'Matematica', docente: 'M. Pablo' },
  { calificacion: 'Regular', fecha: '17/05/2024', tipo: 'Oral individual', materia: 'Matematica', docente: 'M. Pablo' },
  { calificacion: '7', fecha: '22/05/2024', tipo: 'Trabajo práctico', materia: 'Matematica', docente: 'M. Pablo' },

  // Biologia
  { calificacion: '9', fecha: '13/05/2024', tipo: 'Escrito individual', materia: 'Biologia', docente: 'A. Del Rosso' },
  { calificacion: 'Muy bien', fecha: '18/05/2024', tipo: 'Oral individual', materia: 'Biologia', docente: 'A. Del Rosso' },
  { calificacion: '10', fecha: '23/05/2024', tipo: 'Carpeta', materia: 'Biologia', docente: 'A. Del Rosso' }
];

@Component({
  selector: 'app-calificaciones-e',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon
  ],
  templateUrl: './calificaciones-e.component.html',
  styleUrls: ['./calificaciones-e.component.scss']
})
export class CalificacionesEComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['calificacion', 'fecha', 'tipo', 'materia', 'docente'];
  dataSource = new MatTableDataSource<CalificacionData>(CALIFICACIONES_DATA);
  filterValue = '';
  selectedSort = 'materia';

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      return data.calificacion.toLowerCase().includes(transformedFilter) ||
             data.fecha.toLowerCase().includes(transformedFilter) ||
             data.tipo.toLowerCase().includes(transformedFilter) ||
             data.materia.toLowerCase().includes(transformedFilter) ||
             data.docente.toLowerCase().includes(transformedFilter);
    };
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
  }

  sortBy(sortValue: string) {
    this.selectedSort = sortValue;
    this.sort?.sort({ id: sortValue, start: 'asc', disableClear: false });
  }
}
