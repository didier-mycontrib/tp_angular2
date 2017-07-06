import {Component , OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Adresse, Client} from '../client';
import {ClientService} from '../client.service';

@Component({
 //moduleId: module.id, // module.id (cjs uniquement) si pas webpack ni es2015 sinon ./  ou autre dans templateUrl
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
        <button (click)="goBack()">(Retour) / deconnexion</button>
		<hr/>
		
		
		action: <select  (click)="onSelect($event)" >
		    <option value="listeComptes"> liste des comptes </option>
		    <option value="paramVirement">effectuer un virement</option>
			<!-- <option value="dernieresOperations">dernieres Operations</option> indirectement apres selection dans tableau -->
		</select> {{message}} <br/>
		
        <div [ngSwitch]="action">
            <liste-comptes *ngSwitchCase="'listeComptes'" (selectedCompteEvent)="onDernieresOperations($event)"></liste-comptes>
            <dernieres-operations *ngSwitchCase="'dernieresOperations'" [numSelectedCpt]="numSelectedCompte"></dernieres-operations>
            <param-virement *ngSwitchCase="'paramVirement'" (virementOk)="onRefreshListeCompte($event)" ></param-virement>
            <div *ngSwitchDefault>... unknown action ...</div>
        </div>
   </div>		 
  ` ,
 providers : [ClientService]
 })

export class IdentifieComponent implements OnInit{
   action : string = "listeComptes"; //par defaut
   numSelectedCompte : number = null; //selected compte for operations details 
   message : string = "";
   clientId: number = 0;
   client : Client;
    
   constructor(private _clientService : ClientService,
               private route: ActivatedRoute,
               private location: Location){
   } 
    
  

  fetchClient() {
 	/*this._clientService.getClientPromise(this.clientId)
	   .then(cli =>this.client = cli,
	         error =>  this.message = (<any>error).toString()); */
	/* Promise.then() is good , Observable.subscribe() is better */
      
      
	this._clientService.getClientObservableWithAlternativeTry(this.clientId)
	     .subscribe(cli =>this.client = cli ,
		            error =>  this.message = <any>error);
      
      
  }
  ngOnInit() {
      this.route.params.forEach((params: Params) => {
           this.clientId = Number(params['clientId']); 
         });
    this.fetchClient();
  }   
    
  goBack(): void {
     this.location.back();
  }
    
     onRefreshListeCompte(evt : any): void {
        this.message = evt.value;
        this.action = "listeComptes";// refresh effectué via ngAfterViewInit() et fetchComptes() 
     }
    
    onDernieresOperations(evt : any): void {
        console.log("num Compte selectionne =" + evt.value);
        this.numSelectedCompte = evt.value;
        this.action = "dernieresOperations"; 
     }
    
    onSelect(evt : any): void {
    this.action = evt.target.value; 
  }
    
   
}

