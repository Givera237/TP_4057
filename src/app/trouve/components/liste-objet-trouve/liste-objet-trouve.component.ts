import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';
import { Objet } from 'src/app/perdu/models/objet';

@Component({
  selector: 'app-liste-objet-trouve',
  templateUrl: './liste-objet-trouve.component.html',
  styleUrls: ['./liste-objet-trouve.component.scss']
})
export class ListeObjetTrouveComponent 
{
  objet!: Objet[]
  id_utilisateur!: number

  constructor
  (
   private http : HttpClient,
   private cookieService: CookieService, 
   private router : Router,
  ){}

  ngOnInit() : void
  {
    
    this.http.get<Objet[]>('http://localhost:3002/api/liste/objet_trouve').subscribe(reponse  => 
    {
      this.objet = reponse;
      console.log('voici les objets perdu ', this.objet);
    }
    );

    this.id_utilisateur = +this.cookieService.getCookie('id_utilisateur')   
  }
}
