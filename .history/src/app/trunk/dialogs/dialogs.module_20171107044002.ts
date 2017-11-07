import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { MaterialsModule } from "../../materials/materials.module";


import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DialogsService } from "./dialogs.service";
import { FotoUstawieniaComponent } from './foto-ustawienia/foto-ustawienia.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MaterialsModule
  ],
  declarations: [ConfirmDialogComponent, FotoUstawieniaComponent],
  exports: [ConfirmDialogComponent, FotoUstawieniaComponent],
  entryComponents: [ConfirmDialogComponent, FotoUstawieniaComponent],
  providers: [DialogsService]
})
export class DialogsModule { }
