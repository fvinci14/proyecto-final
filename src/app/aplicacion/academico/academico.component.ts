import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AsistenciaEComponent } from './asistencia-e/asistencia-e.component';
import { CalificacionesEComponent } from './calificaciones-e/calificaciones-e.component';
import { HistorialComponent } from './historial/historial.component';
import { MatCardModule } from '@angular/material/card';
import { ButtonsComponent } from '../ui-elements/buttons/buttons.component';

@Component({
  selector: 'app-academico',
  standalone: true,
    imports: [AsistenciaEComponent, ButtonsComponent, CalificacionesEComponent, HistorialComponent, RouterModule, MatTabsModule, RouterLink, NgIf, MatCardModule],
    templateUrl: './academico.component.html',
    styleUrl: './academico.component.scss'
})
export class AcademicoComponent {
    // isToggled
    isToggled = false;
    showAlert = true;

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

    dismissAlert() {
        this.showAlert = false;
    }

}