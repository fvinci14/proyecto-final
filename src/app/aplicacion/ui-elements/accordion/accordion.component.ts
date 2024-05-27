import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [RouterLink, MatIconModule, MatCardModule, CdkAccordionModule],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  items = [
    {
      title: 'Task',
      date: '29 Sept 2022',
      icon: 'task'
    },
    {
      title: 'Folder',
      date: '30 Sept 2022',
      icon: 'folder'
    },
    {
      title: 'Book',
      date: '1 Oct 2022',
      icon: 'book'
    }];
    
    expandedIndex = 0;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
