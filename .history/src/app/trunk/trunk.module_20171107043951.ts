import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from "../materials/materials.module";

import { SharedModule } from "../shared/shared.module";


import { TrunkComponent } from "./trunk.component";
import { DialogsModule } from "./dialogs/dialogs.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule,
    DialogsModule,
    SharedModule
  ],
  declarations: [TrunkComponent],
  exports: [TrunkComponent]
})
export class TrunkModule { }
