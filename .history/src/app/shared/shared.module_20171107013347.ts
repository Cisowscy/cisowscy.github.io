import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent]
})
export class SharedModule { }
