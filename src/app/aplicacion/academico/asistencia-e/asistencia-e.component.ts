import { NgIf } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { ButtonsComponent } from '../../ui-elements/buttons/buttons.component';
import { BasicSelectComponent } from '../../ui-elements/select/basic-select/basic-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

export interface PeriodicElement {
  parte: number;
  fecha: string;
  tipo: string;
  peso: number;
}

@Component({
  selector: 'app-asistencia-e',
  standalone: true,
  imports: [MatCardModule, BasicSelectComponent, MatSelectModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatFormFieldModule, MatMenuModule, ButtonsComponent, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule],
  templateUrl: './asistencia-e.component.html',
  styleUrls: ['./asistencia-e.component.scss']
})
export class AsistenciaEComponent implements AfterViewInit {

  displayedColumns: string[] = ['parte', 'fecha', 'tipo', 'peso'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  totalInasistencias: number = 0;
  isFiltered: boolean = false;
  selectedType: string = 'Todos'; // Valor por defecto

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.calculateTotalInasistencias();
  }

  filterByType(type: string) {
    if (type === 'Todos') {
      this.dataSource.filter = '';
      this.isFiltered = false;
    } else {
      this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => data.tipo.toLowerCase() === filter.toLowerCase();
      this.dataSource.filter = type;
      this.isFiltered = true;
    }
  }

  filterByDate(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (!selectedDate) {
      this.clearFilters();
    } else {
      const filterValue = this.formatDate(selectedDate);
      this.dataSource.filterPredicate = (data: any, filter: string) => data.fecha === filter;
      this.dataSource.filter = filterValue;
      this.isFiltered = true;
    }
  }

    // Método para formatear la fecha como lo necesites (en tu caso, DD/MM/YY)
    formatDate(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año
      return `${day}/${month}/${year}`;
    }
    
  clearFilters() {
    this.dataSource.filter = '';
    this.isFiltered = false;
    this.calculateTotalInasistencias();
  }

  calculateTotalInasistencias() {
    this.totalInasistencias = ELEMENT_DATA.reduce((acc, curr) => acc + curr.peso, 0);
  }

  // isToggled
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // RTL Mode
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { parte: 1, fecha: "01/03/24", tipo: "Presente", peso: 0 },
  { parte: 2, fecha: "02/03/24", tipo: "Ausente", peso: 1 },
  { parte: 3, fecha: "03/03/24", tipo: "Presente", peso: 0 },
  { parte: 4, fecha: "04/03/24", tipo: "Tarde", peso: 0.5 },
  { parte: 5, fecha: "05/03/24", tipo: "Presente", peso: 0 },
  { parte: 6, fecha: "06/03/24", tipo: "Ausente", peso: 1 },
  { parte: 7, fecha: "07/03/24", tipo: "Presente", peso: 0 },
  { parte: 8, fecha: "08/03/24", tipo: "Tarde", peso: 0.5 },
  { parte: 9, fecha: "09/03/24", tipo: "Presente", peso: 0 },
  { parte: 10, fecha: "10/03/24", tipo: "Ausente", peso: 1 },
  { parte: 11, fecha: "11/03/24", tipo: "Presente", peso: 0 },
  { parte: 12, fecha: "12/03/24", tipo: "Ausente", peso: 1 },
  { parte: 13, fecha: "13/03/24", tipo: "Presente", peso: 0 },
  { parte: 14, fecha: "14/03/24", tipo: "Tarde", peso: 0.5 },
  { parte: 15, fecha: "15/03/24", tipo: "Presente", peso: 0 },
  { parte: 16, fecha: "16/03/24", tipo: "Ausente", peso: 1 },
  { parte: 17, fecha: "17/03/24", tipo: "Presente", peso: 0 },
  { parte: 18, fecha: "18/03/24", tipo: "Tarde", peso: 0.5 },
  { parte: 19, fecha: "19/03/24", tipo: "Presente", peso: 0 },
  { parte: 20, fecha: "20/03/24", tipo: "Ausente", peso: 1 }
];
