import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from "../materials/materials.module";

<<<<<<< HEAD
import { RouterModule } from "@angular/router";


import { TRUNK_ROUTES } from "./trunk.routing";

=======
>>>>>>> Dialog_Ustawienia_FotoPokazu

import { TrunkComponent } from "./trunk.component";
import { DialogsModule } from "./dialogs/dialogs.module";
import { FotoPodRozModule } from './sections/foto-pod-roz/foto-pod-roz.module';
import { LotnictwoModule } from './sections/lotnictwo/lotnictwo.module';
import { EwidencjaModule } from "./sections/ewidencja/ewidencja.module";
import { GronoTekaModule } from "./sections/grono-teka/grono-teka.module";
import { GenModule } from "./sections/gen/gen.module";

@NgModule({
  imports: [
    CommonModule,
    //TrunkRoutingModule,
    RouterModule.forChild(TRUNK_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule,
    DialogsModule,
    FotoPodRozModule,
    LotnictwoModule,
    EwidencjaModule,
    GronoTekaModule,
    GenModule
  ],
  declarations: [TrunkComponent],
  exports: [TrunkComponent]
})
export class TrunkModule { }
