import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { MaterialsModule } from "../../materials/materials.module";

import { DialogsService } from "./dialogs.service";
<<<<<<< HEAD
import { FotoUstawieniaComponent } from "./foto-ustawienia/foto-ustawienia.component";
=======
import { FotoUstawieniaComponent } from './foto-ustawienia/foto-ustawienia.component';
>>>>>>> Dialog_Ustawienia_FotoPokazu
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
