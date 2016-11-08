import {Component , Output, EventEmitter} from '@angular/core';
import {Virement} from '../compte';
import {CompteService} from '../compte.service';


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
        
   @Output()
   public virementOk: EventEmitter<{value:string}> = new EventEmitter<{value:string}>();  
    
   message : string ; 
    
   transfert : Virement = { "montant" : 0 , "numCptDeb" : 1 , "numCptCred" : 2  , "ok":false};
   constructor(private _compteService : CompteService){
   }	
   
   private setAndLogMessage( virementOk : boolean){
       if(virementOk){
           this.message = "le montant de " + this.transfert.montant +
                    " a bien ete transfere du compte " + this.transfert.numCptDeb +
                      " vers le compte " + this.transfert.numCptCred;
           }
       else {this.message = "echec  virement";
           }
      console.log(this.message);
   } 
    
   doVirementAndRefresh(){
    console.log("doVirementAndRefresh() : " + this.transfert.montant );
       
    this._compteService.postVirementObservableWithAlternativeTry(this.transfert)
           .subscribe(transfertEffectue =>{ 
                      if(transfertEffectue.ok) {   this.setAndLogMessage(true); this.virementOk.emit({value:this.message});   /*fire event with data*/ }
                      else  {   this.setAndLogMessage(false);  }} ,
                    error =>  console.log(error));
     
    }  
}

