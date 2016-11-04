import {Component} from '@angular/core';
import {Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';


interface Compte {
    numero : number;
	label : string;
	solde: number;	
}


@Component({
  selector:'liste-comptes',
  template:`
       <div id="divListeComptes" style="background-color:rgb(160,250,160); margin:3px; padding:3px;">
        <h3> liste des comptes </h3> 
		<table border="1">
		    <tr>  <th> numero </th>  <th> label </th>  <th> solde </th> </tr>
			<tr *ngFor="let cpt of comptes">  <td style='color : blue' (click)="displayLastOperations(cpt.numero)"> {{cpt.numero}} </td>  <td> {{cpt.label}} </td>  <td> {{cpt.solde}} </td> </tr>
		</table>
		<i>Un click sur un numero de compte permet de obtenir la liste des dernieres operations</i>
       
        </div>
  ` 
 })
export class ListeComptesComponent {
   clientId: number = 0;
   comptes : Compte[] = [
						{
						"numero" : 1,
						"label" : "compte 1 (courant)",
						"solde" : 600.0
						},
						{
						"numero" : 2,
						"label" : "compte 2 (LDD)",
						"solde" : 3200.0
						},
						{
						"numero" : 3,
						"label" : "compte 3 (PEL)",
						"solde" : 6500.0
						}
						];  
  constructor(private _router: Router,
               private route: ActivatedRoute){
			   this.clientId = 0;//routeParams.get('clientId');
   }	
   
 displayLastOperations(numCpt){
   // var identifieForThis = this;
	//this.message = "affichage des operations du compte selectionne : " + numCpt; 	
    //this.numSelectedCpt = numCpt;	
/*
    $http.get('data/operations.json').success(function(data) {
	    identifieForThis.operations = data;
	    $log.log("nb operations" + identifieForThis.operations.length)
	});	
	*/
   // this.renderPath="dernieresOperations";
	  this._router.navigate( ['dernieresOperations', { numSelectedCpt: numCpt }]  );
}
   
}

