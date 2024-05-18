import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsComponent } from '../../ui-elements/buttons/buttons.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { SimpleFuComponent } from "../file-uploader/simple-fu/simple-fu.component";
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
    selector: 'app-basic-elements',
    standalone: true,
    templateUrl: './basic-elements.component.html',
    styleUrl: './basic-elements.component.scss',
    imports: [RouterLink, MatDatepickerModule, MatNativeDateModule, FileUploaderComponent, ButtonsComponent, MatIcon, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, BasicFormComponent, SimpleFuComponent]
})
export class BasicElementsComponent {}