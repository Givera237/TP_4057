import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerduFormComponent } from './components/perdu-form/perdu-form.component';
import { PerduRoutingModule } from './perdu-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeObjetPerduComponent } from './components/liste-objet-perdu/liste-objet-perdu.component';



@NgModule({
  declarations: [
    PerduFormComponent,
    ListeObjetPerduComponent
  ],
  imports: [
    CommonModule,
    PerduRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PerduModule { }
