import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerduFormComponent } from './components/perdu-form/perdu-form.component';
import { PerduRoutingModule } from './perdu-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerduFormComponent
  ],
  imports: [
    CommonModule,
    PerduRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PerduModule { }
