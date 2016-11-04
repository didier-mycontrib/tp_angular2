import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
//old beta2: import {Router, RouteParams} from '@angular/router';
//old beta2: import {RouteConfig} from '@angular/router'; //RouterOutlet is as subpart of ROUTER_DIRECTIVES

import {Router} from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Adresse, Client} from '../client';
import {ClientService} from '../client.service';
/*
import {ListeComptesComponent} from './pourClientIdentifie/listeComptes.component';
import {ParamVirementComponent} from './pourClientIdentifie/paramVirement.component';
import {DernieresOperationsComponent} from './pourClientIdentifie/dernieresOperations.component';
*/

@Component({
  template:`
   <div >
        <h3>  client identifie : {{clientId}}</h3> 
		<div *ngIf="client" >
			{{client.prenom}} {{client.nom}} <br/>
			adresse: {{client.adresse.rue}} {{client.adresse.codePostal}} {{client.adresse.ville}} <br/>
			telephone: {{client.telephone}} <br/>
			email: {{client.email}}
		</div>
        <hr/>
        <button (click)="goBack()">Retour</button>
		<hr/>
		
		
		action: <select [(ngModel)]="action" (change)="onSelect($event)" >
		    <option value="listeComptes"> liste des comptes </option>
		    <option value="paramVirement">effectuer un virement</option>
			<!-- <option value="dernieresOperations">dernieres Operations</option> indirectement apres selection dans tableau -->
		</select> {{action}} -- 
		{{message}} <br/>
		<router-outlet name="identifiedOutlet"></router-outlet>
        <div [ngSwitch]="action">
            <div *ngSwitchCase="'listeComptes'">listeComptes<liste-comptes></liste-comptes></div>
            <div *ngSwitchCase="'dernieresOperations'"><dernieres-operations></dernieres-operations></div>
            <div *ngSwitchCase="'paramVirement'"><param-virement></param-virement></div>
             <div *ngSwitchDefault>... unknown action ...</div>
        </div>
   </div>		 
  ` ,
 providers : [ClientService]
 })
/*    
@RouteConfig([
  {path:'/',         name: 'ListeComptes', component: ListeComptesComponent, useAsDefault: true},
  {path:'/virement',         name: 'ParamVirement', component: ParamVirementComponent },
  {path:'/operations/:numSelectedCpt',         name: 'DernieresOperations', component: DernieresOperationsComponent }
])*/
export class IdentifieComponent implements OnInit{
   action : string = "listeComptes"; //par defaut
   message : string = "...";
   clientId: number = 0;
   client : Client;
    
   constructor(private _router: Router,
               /*private _clientService : ClientService,*/
               private route: ActivatedRoute,
               private location: Location){
   } 
    
    /*
   constructor(private _clientService : ClientService,
               private _router: Router,
               routeParams: RouteParams){
			   this.clientId = Number(routeParams.get('clientId'));
   }*/

  fetchClient() {
 	/*this._clientService.getClientPromise(this.clientId)
	   .then(cli =>this.client = cli,
	         error =>  this.message = (<any>error).toString()); */
	/* Promise.then() is good , Observable.subscribe() is better */
      
    /*  
	this._clientService.getClientObservable(this.clientId)
	     .subscribe(cli =>this.client = cli ,
		            error =>  this.message = <any>error);
      */
      
      var adr : Adresse = new Adresse(1 , "1 rue elle" , "75000" , "Paris"); 
      this.client = new Client(this.clientId,"alex" , "therieur" , adr , "0102030405" , "alex@ici.fr" ); 
  }
  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          //let id = +params['clientId'];
          this.clientId = Number(params['clientId']); 
         });
    this.fetchClient();
  }   
    
  goBack(): void {
     this.location.back();
  }
    
    onSelect(evt : any): void {
    this.action = evt.target.value; //"listeComptes" ou "paramVirement" ou ""
    //let link = [action];
    //this._router.navigate( link  );//{ relativeTo: this.route } existe en temps que 2eme parametre de navigate()
        
    //this._router.navigateByUrl(`listeComptes`); //avec  quote inverse `...` !!!
  }
    
   
}

