import {Component , EventEmitter, Output, OnInit , AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {Compte} from '../compte';
import {CompteService} from '../compte.service';


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
export class ListeComptesComponent implements OnInit, AfterViewInit{
   
    @Output()
   public selectedCompteEvent : EventEmitter<{value:number}> = new EventEmitter<{value:number}>(); 
    
   clientId: number = 0;
   comptes : Compte[] = null ;
  constructor( private _compteService : CompteService,
               private route: ActivatedRoute){
   }	
    
   ngOnInit() {
      this.route.params.forEach((params: Params) => {
          this.clientId = Number(params['clientId']); 
         });
    //this.fetchComptes(); //maintenant dans ngAfterViewInit()
    }  
    
    ngAfterViewInit(){
        this.fetchComptes();//refresh
    }
 
    fetchComptes() {  
    this._compteService.getComptesOfClientObservableWithAlternativeTry(this.clientId)
         .subscribe(comptes =>this.comptes = comptes ,
                    error =>  console.log(error));

  }
   
    displayLastOperations(numCpt){
    	console.log("affichage des operations du compte selectionne : " + numCpt); 	
        this.selectedCompteEvent.emit({value:numCpt}); // fire event with data
    }
   
}

