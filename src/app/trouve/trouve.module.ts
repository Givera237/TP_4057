import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrouveFormComponent } from './components/trouve-form/trouve-form.component';
import { TrouveRoutingModule } from './trouve-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeObjetTrouveComponent } from './components/liste-objet-trouve/liste-objet-trouve.component';



@NgModule({
  declarations: [
    TrouveFormComponent,
    ListeObjetTrouveComponent
  ],
  imports: [
    CommonModule,
    TrouveRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TrouveModule { }
