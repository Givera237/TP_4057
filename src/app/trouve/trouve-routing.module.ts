import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrouveFormComponent } from "./components/trouve-form/trouve-form.component";
import { ListeObjetTrouveComponent } from "./components/liste-objet-trouve/liste-objet-trouve.component";


const routes : Routes =
[
    {path : 'form', component : TrouveFormComponent },
    {path : 'liste', component : ListeObjetTrouveComponent}
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

export class TrouveRoutingModule
{

}