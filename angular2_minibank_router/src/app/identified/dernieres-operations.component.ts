import {Component , Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params }   from '@angular/router';
import {Operation} from '../compte';
import {CompteService} from '../compte.service';



@Component({
  //moduleId: module.id, // module.id (cjs uniquement) si pas webpack ni es2015 sinon ./  ou autre dans templateUrl
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
export class DernieresOperationsComponent implements OnInit {
   @Input()     
   public numSelectedCpt: number;
    
   private operations : Operation[] ;
    
   constructor(private route: ActivatedRoute,
               private _compteService : CompteService){ 
                }
    	
    ngOnInit() {      
       this.fetchOperations();
    }  
 
    fetchOperations() {   
      this._compteService.getOperationsOfCompteObservableWithAlternativeTry(this.numSelectedCpt)
         .subscribe(operations =>this.operations = operations ,
                    error =>  console.log(error));
  }				
}

