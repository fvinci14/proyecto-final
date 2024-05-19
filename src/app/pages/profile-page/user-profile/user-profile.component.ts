import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [RouterLink, MatButtonModule, NgxEditorModule, MatFormFieldModule, MatIconModule, MatCardModule, CdkAccordionModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
    // Text Editor
    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
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

    ngOnInit(): void {
        this.editor = new Editor();
    }

    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
