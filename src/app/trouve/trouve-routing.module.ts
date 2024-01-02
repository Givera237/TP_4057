import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrouveFormComponent } from "./components/trouve-form/trouve-form.component";


const routes : Routes =
[
    {path : 'form', component : TrouveFormComponent },
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