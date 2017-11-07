import { NgModule, ApplicationRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MaterialsModule } from "../materials/materials.module";

import { AgmCoreModule } from '@agm/core';

import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { TabelaSortowanaFiltrComponent } from './tabela-sortowana-filtr/tabela-sortowana-filtr.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlXPo-7sGel0p-azJj-RkvilDi_kK0Y-k'
    }),
    AgmSnazzyInfoWindowModule,
    MaterialsModule
  ],
  declarations: [GoogleMapsComponent, TabelaSortowanaFiltrComponent],
  exports: [GoogleMapsComponent, TabelaSortowanaFiltrComponent]
})
export class SharedModule { }
