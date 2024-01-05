import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = 
  [
    {path : '', component : AccueilComponent},
    {path: 'perdu',  loadChildren: () => import('./perdu/perdu.module').then(m => m.PerduModule) },
    {path: 'trouve',  loadChildren: () => import('./trouve/trouve.module').then(m => m.TrouveModule) },
    {path: 'recherche',  loadChildren: () => import('./recherche/recherche.module').then(m => m.RechercheModule) },
    {path: 'authentification',  loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
