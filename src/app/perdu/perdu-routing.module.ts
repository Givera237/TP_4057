import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerduFormComponent } from "./components/perdu-form/perdu-form.component";


const routes : Routes =
[
    {path : 'form/:id', component : PerduFormComponent},
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