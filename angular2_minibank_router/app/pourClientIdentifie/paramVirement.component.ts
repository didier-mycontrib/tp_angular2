import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
//import {RouteConfig, RouterOutlet} from 'angular2/router';

interface Transfert {
    montant : number;
	numCptDeb : number;
	numCptCred: number;
}


@Component({
  template:`
   <div id="divVirement" style="background-color:rgb(160,160,250); margin:3px; padding:3px;" >
        <h3> parametrage virement </h3> 
		   <label for="montant">montant :</label> <input id="montant" [(ngModel)]="transfert.montant"  /> <br/>
           <label for="numCptDeb">numCptDeb :</label> <input id="numCptDeb" [(ngModel)]="transfert.numCptDeb"  /> <br/>
           <label for="numCptCred">numCptCred :</label> <input id="numCptCred" [(ngModel)]="transfert.numCptCred"  /> <br/>
		  <button (click)="doVirementAndRefresh()">effectuer le virement</button>
    </div>
  ` //,
 //directives: [RouterOutlet],
 })
export class ParamVirementComponent {
   transfert : Transfert = { "montant" : 50 , "numCptDeb" : 1 , "numCptCred" : 2 };
   constructor(private _router: Router,
               routeParams: RouteParams){
			   //this.clientId = routeParams.get('clientId');
   }	
   doVirementAndRefresh(){
    console.log("doVirementAndRefresh() : " + this.transfert.montant );
	//simulation (sans ws REST)
	/*
	for(i=0; i< this.comptes.length; i++){
		if(this.comptes[i].numero == this.transfert.numCptDeb){
			this.comptes[i].solde -= Number(this.transfert.montant);
		}
		if(this.comptes[i].numero == this.transfert.numCptCred){
			this.comptes[i].solde += Number(this.transfert.montant);
		}
	}
	
	this.message = "le montant de " + this.transfert.montant +
                   	" a bien ete transfere du compte " + this.transfert.numCptDeb +
					  " vers le compte " + this.transfert.numCptCred; 	
    					  
    this.renderPath="listeComptes";		
*/	
};   
}

