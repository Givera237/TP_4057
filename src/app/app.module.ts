import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
