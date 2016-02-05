import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; //RouterOutlet is as subpart of ROUTER_DIRECTIVES

import {Adresse, Client} from './client';
import {ClientService} from './client.service';

import {ListeComptesComponent} from './pourClientIdentifie/listeComptes.component';
import {ParamVirementComponent} from './pourClientIdentifie/paramVirement.component';
import {DernieresOperationsComponent} from './pourClientIdentifie/dernieresOperations.component';


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
		
		
		action: <select>
		    <option value="listeComptes"> liste des comptes </option>
		    <option value="paramVirement">effectuer un virement</option>
			<!-- <option value="dernieresOperations">dernieres Operations</option> indirectement apres selection dans tableau -->
		</select>
		{{message}} <br/>
		 <router-outlet></router-outlet>	
   </div>		 
  ` ,
 directives: [ROUTER_DIRECTIVES],
 providers : [ClientService]
 })
@RouteConfig([
  {path:'/',         name: 'ListeComptes', component: ListeComptesComponent, useAsDefault: true},
  {path:'/virement',         name: 'ParamVirement', component: ParamVirementComponent },
  {path:'/operations/:numSelectedCpt',         name: 'DernieresOperations', component: DernieresOperationsComponent }
])
export class IdentifieComponent implements OnInit{
   message : string = "...";
   clientId: number = 0;
   client : Client;
   constructor(private _clientService : ClientService,
               private _router: Router,
               routeParams: RouteParams){
			   this.clientId = Number(routeParams.get('clientId'));
   }

  fetchClient() {
 	/*this._clientService.getClientPromise(this.clientId)
	   .then(cli =>this.client = cli,
	         error =>  this.message = (<any>error).toString()); */
	/* Promise.then() is good , Observable.subscribe() is better */
	this._clientService.getClientObservable(this.clientId)
	     .subscribe(cli =>this.client = cli ,
		            error =>  this.message = <any>error);
  }
  ngOnInit() {
    this.fetchClient();
  }   
}

