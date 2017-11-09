import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenComponent } from './gen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GenComponent],
  exports: [GenComponent]
})
export class GenModule { }
