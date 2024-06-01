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
import { MatButtonModule } from '@angular/material/button';

export interface Materia {
  id: string;
  nombre: string;
  curso: string;
  nivel: string;
}

const MATERIAS_DATA: Materia[] = [
  { id: '1', nombre: 'Matemáticas', curso: '1A', nivel: 'Primario' },
  { id: '2', nombre: 'Lengua', curso: '1B', nivel: 'Primario' },
  { id: '3', nombre: 'Ciencias', curso: '2A', nivel: 'Primario' },
  { id: '4', nombre: 'Historia', curso: '2B', nivel: 'Primario' },
  { id: '5', nombre: 'Geografía', curso: '3A', nivel: 'Primario' }
  // Agrega más datos según sea necesario
];

@Component({
  selector: 'app-listado-materias',
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
    MatPaginator,
    MatButtonModule

  ],  templateUrl: './listado-materias.component.html',
  styleUrl: './listado-materias.component.scss'
})

export class ListadoMateriasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'curso', 'nivel', 'accion'];
  dataSource = new MatTableDataSource<Materia>(MATERIAS_DATA);
  filterValue = '';

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

  ngOnInit(): void {}

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
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
