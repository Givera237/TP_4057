import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerduFormComponent } from "./components/perdu-form/perdu-form.component";
import { ListeObjetPerduComponent } from "./components/liste-objet-perdu/liste-objet-perdu.component";


const routes : Routes =
[
    {path : 'form', component : PerduFormComponent},
    {path : 'liste', component : ListeObjetPerduComponent}
]

@NgModule
(
    {
        imports : 
        [
            RouterModule.forChild(routes)
        ],
        exports: 
        [
            RouterModule
        ]
    }
)

export class PerduRoutingModule
{

}