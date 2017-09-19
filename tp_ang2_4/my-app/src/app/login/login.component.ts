import { Component, OnInit } from '@angular/core';
import { VerifAuth } from "app/VerifAuth";
import { VerifAuthService } from "app/verif-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent implements OnInit {

  constructor(private _verifAuthService : VerifAuthService) { }

  verifAuth : VerifAuth =new VerifAuth();

  onLogin(evt){
     this.verifAuth.numClient = Number(this.verifAuth.numClient);
     console.log("verifAuth (before ws call):"+JSON.stringify(this.verifAuth));
     this._verifAuthService.verifierAuthentification(this.verifAuth)
       .subscribe(va => { this.verifAuth=va ; 
         this.storeTokenInLocalStorage(va);},
                 e=> console.log("error"+e));
      //if(...) ou console.log(resultat) pas ici !!!
  }

  storeTokenInLocalStorage(va:VerifAuth){
    if(va && va.token){
       console.log('received token='+va.token);
       localStorage.setItem('token',va.token);
    }
  }

  ngOnInit() {
  }

}
