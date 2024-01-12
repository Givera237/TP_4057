import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-trouve-form',
  templateUrl: './trouve-form.component.html',
  styleUrls: ['./trouve-form.component.scss']
})
export class TrouveFormComponent 
{
  essai = new FormData();
  id_utilisateur!: number
  nom!: string
  type!: string
  region!: string
  ville!: string
  quartier!: string 
  precision!: string
  date!: string
  description!: string
  etat!: string 

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

  onFileChange(event: any) 
  {
    if (event.target.files && event.target.files.length > 0) 
    {
      this.essai.delete('image'); // Supprimer l'image précédente s'il y en a une
      this.essai.append('image', event.target.files[0]); // Ajouter la nouvelle image
    }
    
  }

  onSubmit()
  {
    this.essai.append('nom', this.nom);
    this.essai.append('type', this.type);
    this.essai.append('region', this.region);
    this.essai.append('ville', this.ville);
    this.essai.append('quartier', this.quartier);
    this.essai.append('precision', this.precision);
    this.essai.append('date', this.date);
    this.essai.append('description', this.description);
    this.essai.append('etat', this.etat);
    

    console.log(this.essai)
    this.http.post(`http://localhost:3002/api/creation/objet/${this.id_utilisateur}`, this.essai, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        {
          console.log(response.statusText)
          console.log('objet bien envoyé')
        }
        else 
        {
          console.log('merde combi');
        }
      },
      error => 
      {
        console.error(error); // Afficher l'erreur à l'utilisateur
      }
    )

  }
}
