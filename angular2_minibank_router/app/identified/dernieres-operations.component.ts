import {Component} from '@angular/core';
//import {Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

interface Operation {
    numero : number;
	label : string;
	montant: number;
	dateOp : string;
}


@Component({
  selector:'dernieres-operations',
  template:`
   <div id="divDernieresOperations" style="background-color:rgb(250,160,160); margin:3px; padding:3px;">
        <h3> dernieres operations du compte {{numSelectedCpt}}</h3> 
		<table border="1">
		    <tr>  <th> numero </th>  <th> label </th>  <th> montant </th>   <th> date </th> </tr>
			<tr *ngFor="let opt of operations">  <td> {{opt.numero}} </td>  <td> {{opt.label}} </td>  <td> {{opt.montant}} </td> <td> {{opt.dateOp}} </td> </tr>
		</table>
       
        </div>
  `
 })
export class DernieresOperationsComponent {
   numSelectedCpt: number = 0;
   operations : Operation[] = [
				{
				"numero" : 1,
				"label" : "achat xy",
				"montant" : -50,
				"dateOp" : "2015-01-20"
				},
				{
				"numero" : 2,
				"label" : "achat zz",
				"montant" : -90,
				"dateOp" : "2015-02-08"
				},
				{
				"numero" : 3,
				"label" : "salaire",
				"montant" : 2000,
				"dateOp" : "2015-03-18"
				}
				];
   constructor(/*private _router: Router,*/
               private route: ActivatedRoute){
                   this.route.params.forEach((params: Params) => {
			           this.numSelectedCpt = Number(params['numSelectedCpt']);
                       });
                }					
}

