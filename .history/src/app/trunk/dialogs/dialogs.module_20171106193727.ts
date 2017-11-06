import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatDialogModule } from "@angular/material";


import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DialogsService } from "./dialogs.service";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }
