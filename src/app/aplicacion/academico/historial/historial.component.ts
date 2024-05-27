import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogOverviewExampleDialog } from '../../ui-elements/dialog/basic-dialog/basic-dialog.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

export interface Historial {
  cicloLectivo: string;
  anio: number;
  nivel: string;
  promedio: number;
  inasistencias: number;
  detalles: Detalle[];
}

export interface Detalle {
  materia: string;
  promedio: number;
  docente: string;
}

const HISTORIAL_DATA: Historial[] = [
  {
    cicloLectivo: '2023', 
    anio: 3, 
    nivel: 'Secundario', 
    promedio: 8.5, 
    inasistencias: 15, 
    detalles: [
      { materia: 'Matemáticas', promedio: 9, docente: 'F. Villegas' },
      { materia: 'Ciencias', promedio: 8, docente: 'R. Martínez' },
      { materia: 'Historia', promedio: 8.5, docente: 'L. Gómez' },
      { materia: 'Geografía', promedio: 9, docente: 'A. Fernández' },
      { materia: 'Lengua', promedio: 8, docente: 'C. López' },
      { materia: 'Inglés', promedio: 8.7, docente: 'D. Pérez' },
      { materia: 'Educación Física', promedio: 9, docente: 'M. Rodríguez' }
    ]
  },
  {
    cicloLectivo: '2022', 
    anio: 2, 
    nivel: 'Secundario', 
    promedio: 8.3, 
    inasistencias: 7, 
    detalles: [
      { materia: 'Matemáticas', promedio: 8.5, docente: 'J. Suárez' },
      { materia: 'Ciencias', promedio: 8, docente: 'G. Morales' },
      { materia: 'Historia', promedio: 7.8, docente: 'L. Blanco' },
      { materia: 'Geografía', promedio: 8.2, docente: 'E. Ortega' },
      { materia: 'Lengua', promedio: 8.5, docente: 'P. Castro' },
      { materia: 'Inglés', promedio: 8.9, docente: 'M. Romero' },
      { materia: 'Educación Física', promedio: 9, docente: 'S. Núñez' },
      { materia: 'Arte', promedio: 8, docente: 'V. Castillo' }
    ]
  },
  {
    cicloLectivo: '2021', 
    anio: 1, 
    nivel: 'Secundario', 
    promedio: 8.7, 
    inasistencias: 11, 
    detalles: [
      { materia: 'Matemáticas', promedio: 8.8, docente: 'A. Vázquez' },
      { materia: 'Ciencias', promedio: 8.5, docente: 'C. Sánchez' },
      { materia: 'Historia', promedio: 8.7, docente: 'R. Herrera' },
      { materia: 'Geografía', promedio: 8.9, docente: 'F. Silva' },
      { materia: 'Lengua', promedio: 8.6, docente: 'L. Castro' },
      { materia: 'Inglés', promedio: 9, docente: 'J. Torres' },
      { materia: 'Educación Física', promedio: 8.5, docente: 'H. Mendoza' },
      { materia: 'Arte', promedio: 8.4, docente: 'K. Vega' }
    ]
  },
  {
    cicloLectivo: '2020', 
    anio: 6, 
    nivel: 'Primario', 
    promedio: 8.9, 
    inasistencias: 3, 
    detalles: [
      { materia: 'Matemáticas', promedio: 9, docente: 'E. Figueroa' },
      { materia: 'Ciencias', promedio: 9, docente: 'R. Delgado' },
      { materia: 'Historia', promedio: 8.7, docente: 'N. Ruiz' },
      { materia: 'Geografía', promedio: 8.8, docente: 'D. Molina' },
      { materia: 'Lengua', promedio: 8.9, docente: 'B. Cruz' },
      { materia: 'Inglés', promedio: 9.2, docente: 'S. Ortega' },
      { materia: 'Educación Física', promedio: 8.7, docente: 'T. Pérez' }
    ]
  },
  {
    cicloLectivo: '2019', 
    anio: 5, 
    nivel: 'Primario', 
    promedio: 8.6, 
    inasistencias: 14, 
    detalles: [
      { materia: 'Matemáticas', promedio: 8.5, docente: 'M. Soto' },
      { materia: 'Ciencias', promedio: 8.6, docente: 'F. Reyes' },
      { materia: 'Historia', promedio: 8.4, docente: 'A. Jiménez' },
      { materia: 'Geografía', promedio: 8.7, docente: 'L. Cabrera' },
      { materia: 'Lengua', promedio: 8.9, docente: 'E. Ramos' },
      { materia: 'Inglés', promedio: 8.8, docente: 'M. Castillo' },
      { materia: 'Educación Física', promedio: 8.5, docente: 'P. Gómez' },
      { materia: 'Arte', promedio: 8.7, docente: 'J. Rojas' }
    ]
  }
];


@Component({
  selector: 'app-historial',
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
    MatIcon,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})

export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['cicloLectivo', 'anio', 'nivel', 'promedio', 'inasistencias', 'accion'];
  dataSource = new MatTableDataSource<any>(HISTORIAL_DATA); // Asegúrate de tener tus datos aquí

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  isToggled = false;

  constructor(
    public dialog: MatDialog,
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  openDialog(element: Historial) {
    this.dialog.open(this.dialogTemplate, {
      data: element
    });
  }
  
  closeDialog() {
    this.dialog.closeAll();
  }
}
