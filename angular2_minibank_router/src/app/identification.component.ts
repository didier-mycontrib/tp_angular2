import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ClientAuth} from './client';
import {ClientService} from './client.service';

@Component({
  template:`
   <div >
        <h3> {{title}} </h3> 
		   numClient:<input type="text" [(ngModel)]="numClient"/> <i>(ex: 1)</i> <br/>
		   password:<input type="text" [(ngModel)]="password"/> <i>(ex: pwd1)</i><br/>
          <button (click)="onVerifPassword()"  > verif. password </button> <br/>
          <button (click)="onNavigate()" [hidden]="!resVerifPwd" > vers espace client identifie </button> <br/>
           <a [routerLink]="['/clientItendifie', numClient]" [hidden]="!resVerifPwd" > vers espace client identifie . </a> <br/> 
		 </div>  
  ` 
 })
export class IdentificationComponent {
   title : string = "identification client minibank";
   numClient : number;
   password : string;
   resVerifPwd : boolean = false;

   constructor(private _router: Router ,  
               private _clientService : ClientService){
   }
   
    onVerifPassword() : void {
     let clientAuth  : ClientAuth =  {
            "numClient": this.numClient,
            "password": this.password,
            "ok" : null};
    
        
     this._clientService.verifyClientAuthObservableWithAlternativeTry(clientAuth)
           .subscribe(verifiedClientAuth =>{ if(verifiedClientAuth.ok) { this.resVerifPwd=true;  console.log("verifyAuth ok") }
                                                                  else { this.resVerifPwd=false;  console.log("verifyAuth failed") }} ,
                    error =>  console.log(error));
  }
  
   onNavigate() : void {
      let link = ['/clientItendifie', this.numClient];
    
     this._router.navigate( link  );   
      //this._router.navigateByUrl(`/clientItendifie/${this.numClient}`); //avec  quote inverse `...` !!!
  }
}

