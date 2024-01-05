import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,  HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent 
{ 
  loginForm!: FormGroup;
  erreur!:string;
  statut!: number;
  connexion!: boolean;
  cookie!: any;

  
  constructor(
              private router : Router, 
              private formbuilder : FormBuilder,
              private cookieService: CookieService,
              private http : HttpClient
             ){} 

  ngOnInit() :void
  {
    this.erreur = '';
    this.loginForm = this.formbuilder.group
    (
      {
        pseudo: [null],
        mot_de_passe: [null]     
      }
    ) ;
  } 

  onSubmit()
  {
    const obj = this.loginForm.value;
  
    this.http.post('http://localhost:3000/api/login', obj, { observe: 'response' }).subscribe
    (
      (response: HttpResponse<any>) => 
      {
        if (response.status === 200) 
        
        { 
         console.log(response);
         console.log('session',response.body);
         this.cookie = response.body;
         
         this.cookieService.setCookie(this.cookie, 30);      
         this.router.navigateByUrl(``);
        } 
      },
      
      error => 
      { 
        if (error.status === 404) 
        {
          this.erreur = 'Pseudo inexixtant Veuillez réessayer!!';
          console.log(error);
        }
        if (error.status === 500) 
        {
          this.erreur = 'Erreur système réessayer plus tard'
        }
        console.error(error.body); 
      } 
    ) ;  
  }

}
