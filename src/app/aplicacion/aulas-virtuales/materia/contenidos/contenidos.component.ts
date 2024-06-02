import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AulasVirtualesService } from '../../../datos/aulas-virtuales.service';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CrearContenidoComponent } from './crear-contenido/crear-contenido.component';

@Component({
  selector: 'app-contenidos',
  standalone: true,
  imports: [RouterLink, CrearContenidoComponent, MatIconModule, MatCardModule, CdkAccordionModule, MatListModule],
  templateUrl: './contenidos.component.html',
  styleUrl: './contenidos.component.scss'
})
export class ContenidosComponent {
  materiaId: string | null = null;
  contenidos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private aulasService: AulasVirtualesService,
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
  });
  }

  // isToggled
  isToggled = false;
  
  // Dark Mode
  toggleTheme() {
      this.themeService.toggleTheme();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.materiaId = params.get('id');
      console.log('Materia ID:', this.materiaId); // Mostrar el ID por consola
      this.loadContenidos();
    });
  }

  loadContenidos() {
    if (this.materiaId) {
      this.aulasService.getContenidosByMateriaId(this.materiaId).subscribe(data => {
        this.contenidos = data;
      });
    }
  }
}
