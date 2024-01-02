import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrouveFormComponent } from './components/trouve-form/trouve-form.component';
import { TrouveRoutingModule } from './trouve-routing.module';



@NgModule({
  declarations: [
    TrouveFormComponent
  ],
  imports: [
    CommonModule,
    TrouveRoutingModule
  ]
})
export class TrouveModule { }
