import {Component, Inject} from '@angular/core';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
  selector: 'app-crear-contenido',
  standalone: true,
  imports: [MatFormFieldModule, MatIcon, MatInputModule, FormsModule, MatButtonModule, MatCardModule],
  templateUrl: './crear-contenido.component.html',
  styleUrl: './crear-contenido.component.scss'
})
export class CrearContenidoComponent {

    // Basic Dialog
    animal: string;
    name: string;

    constructor(
        public dialog: MatDialog
    ) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(CrearContenidoDialog, {
            data: {name: this.name, animal: this.animal},
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}

// Dialog Overview Example Dialog
@Component({
    selector: 'crear-contenido-dialog',
    templateUrl: 'crear-contenido-dialog.html',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
    ]
})
export class CrearContenidoDialog {

    constructor(
        public dialogRef: MatDialogRef<CrearContenidoDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}