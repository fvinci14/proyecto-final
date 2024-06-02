import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ContenidosComponent } from './contenidos/contenidos.component';
import { PanelDocenteComponent } from './panel-docente/panel-docente.component';
import { TutorComponent } from './tutor/tutor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { AulasVirtualesService } from '../../datos/aulas-virtuales.service';

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, MatButtonModule, MatMenuModule, RouterLinkActive, RouterLink, RouterOutlet, ContenidosComponent, PanelDocenteComponent, TutorComponent],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.scss'
})
export class MateriaComponent {
    materiaId: string | null = null;
    materiaNombre: string = '';
    // isToggled
    isToggled = false;

      constructor(
            private route: ActivatedRoute,
            private aulasService: AulasVirtualesService,
          public themeService: CustomizerSettingsService
      ) {
          this.themeService.isToggled$.subscribe(isToggled => {
              this.isToggled = isToggled;
          });
      }

      ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.materiaId = params.get('id');
          if (this.materiaId) {
            this.loadNombreMateria(this.materiaId);
          }
        });
      }
    
      loadNombreMateria(id: string) {
        this.aulasService.getNombreMateriaById(id).subscribe(nombre => {
          this.materiaNombre = nombre;
        });
      }
  
      // Dark Mode
      toggleTheme() {
          this.themeService.toggleTheme();
      }
  
      // RTL Mode
      toggleRTLEnabledTheme() {
          this.themeService.toggleRTLEnabledTheme();
      }

}

