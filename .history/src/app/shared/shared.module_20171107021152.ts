import { NgModule, ApplicationRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AgmCoreModule } from '@agm/core';

import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlXPo-7sGel0p-azJj-RkvilDi_kK0Y-k'
    }),
    AgmSnazzyInfoWindowModule
  ],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent]
})
export class SharedModule { }
