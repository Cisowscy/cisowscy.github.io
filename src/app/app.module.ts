import { NgModule, ApplicationRef } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { APP_ROUTES } from "./app.routing";
import { AppComponent } from './app.component';

import { TrunkModule } from './trunk/trunk.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true }),
    TrunkModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
  
}
