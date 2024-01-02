import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerduFormComponent } from './components/perdu-form/perdu-form.component';
import { PerduRoutingModule } from './perdu-routing.module';



@NgModule({
  declarations: [
    PerduFormComponent
  ],
  imports: [
    CommonModule,
    PerduRoutingModule
  ]
})
export class PerduModule { }
