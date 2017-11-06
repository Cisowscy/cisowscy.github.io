import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from "../materials/materials.module";

import { TrunkComponent } from "./trunk.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  declarations: [TrunkComponent],
  exports: [TrunkComponent]
})
export class TrunkModule { }
