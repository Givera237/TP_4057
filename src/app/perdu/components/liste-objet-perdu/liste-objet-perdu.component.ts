import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';
import { Objet } from '../../models/objet';

@Component({
  selector: 'app-liste-objet-perdu',
  templateUrl: './liste-objet-perdu.component.html',
  styleUrls: ['./liste-objet-perdu.component.scss']
})
export class ListeObjetPerduComponent 
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
    
    this.http.get<Objet[]>('http://localhost:3002/api/liste/objet_perdu').subscribe(reponse  => 
    {
      this.objet = reponse;
      console.log('voici les objets perdu ', this.objet);
    }
    );

    this.id_utilisateur = +this.cookieService.getCookie('id_utilisateur')   
  }
}
