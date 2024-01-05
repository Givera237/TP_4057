import { Component } from '@angular/core';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent 
{
  id_utilisateur!: number

  
  constructor
  (
   private http : HttpClient,
   private cookieService: CookieService, 
   private router : Router,
  ){}

  ngOnInit() : void
  {
    this.id_utilisateur = +this.cookieService.getCookie('id_utilisateur')   
  } 

  onViewFormation( ) : void
    {
      
        this.router.navigateByUrl(`perdu/form/${this.id_utilisateur}`); 
    }
}
