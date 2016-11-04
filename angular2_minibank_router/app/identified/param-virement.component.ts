import {Component} from '@angular/core';
import {Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

interface Transfert {
    montant : number;
	numCptDeb : number;
	numCptCred: number;
}


@Component({
  selector:'param-virement',
  template:`
   <div id="divVirement" style="background-color:rgb(160,160,250); margin:3px; padding:3px;" >
        <h3> parametrage virement </h3> 
		   <label for="montant">montant :</label> <input id="montant" [(ngModel)]="transfert.montant"  /> <br/>
           <label for="numCptDeb">numCptDeb :</label> <input id="numCptDeb" [(ngModel)]="transfert.numCptDeb"  /> <br/>
           <label for="numCptCred">numCptCred :</label> <input id="numCptCred" [(ngModel)]="transfert.numCptCred"  /> <br/>
		  <button (click)="doVirementAndRefresh()">effectuer le virement</button>
    </div>
  ` 
 })
export class ParamVirementComponent {
   transfert : Transfert = { "montant" : 50 , "numCptDeb" : 1 , "numCptCred" : 2 };
   constructor(private _router: Router,
               private route: ActivatedRoute){
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

