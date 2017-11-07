import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { MaterialsModule } from "../../materials/materials.module";

import { DialogsService } from "./dialogs.service";
import { FotoUstawieniaComponent } from "./foto-ustawienia/foto-ustawienia.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    MaterialsModule
  ],
  declarations: [FotoUstawieniaComponent],
  exports: [FotoUstawieniaComponent],
  entryComponents: [FotoUstawieniaComponent],
  providers: [DialogsService]
})
export class DialogsModule {}
