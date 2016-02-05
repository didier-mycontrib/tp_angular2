import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

interface Operation {
    numero : number;
	label : string;
	montant: number;
	dateOp : string;
}


@Component({
  template:`
   <div id="divDernieresOperations" style="background-color:rgb(250,160,160); margin:3px; padding:3px;">
        <h3> dernieres operations du compte {{numSelectedCpt}}</h3> 
		<table border="1">
		    <tr>  <th> numero </th>  <th> label </th>  <th> montant </th>   <th> date </th> </tr>
			<tr *ngFor="#opt of operations">  <td> {{opt.numero}} </td>  <td> {{opt.label}} </td>  <td> {{opt.montant}} </td> <td> {{opt.dateOp}} </td> </tr>
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
   constructor(private _router: Router,
               routeParams: RouteParams){
			   this.numSelectedCpt = Number(routeParams.get('numSelectedCpt'));
   }					
}

