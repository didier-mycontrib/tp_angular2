import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CaddyService {
  private _compteur : number = 0;
  private _caddyContent : string[] = [];
  //NB: un objet de type BehaviorSubject doit avoir une valeur initiale dès sa construction
  //c'est une chose Observable depuis plusieurs composants de l'application.
  //dès que la valeur sera modifiée , tous les observateurs seront automatiquement synchronisés.
  public bsCompteur : BehaviorSubject<number>  = new BehaviorSubject<number>(this._compteur); 
  public bsCaddyContent : BehaviorSubject<string[]>  = new BehaviorSubject<string[]>(this._caddyContent); 

  constructor() {
    //....subscribe(callBackOnNext(nextValue) , callBackOnError(err) , callBackOnCompleted());
    this.bsCompteur.subscribe( nextValueOfCompteur => this._compteur = nextValueOfCompteur); 
    this.tryReloadCaddyContentFromLocalStorage();
    this.subscribeCaddyStoringInLocalStorage();
   }

   public addElementInCaddy(productName : string){
     this._caddyContent.push(productName);
     this.bsCaddyContent.next(this._caddyContent);
     //this._compteur = this._caddyContent.length;
     this._compteur++;
     this.bsCompteur.next(this._compteur);
   }

   public clearCaddy(){
     this._caddyContent = [];
     this.bsCaddyContent.next(this._caddyContent);
     this._compteur=0;
     this.bsCompteur.next(this._compteur);
   }

   //Attention: localStorage = moyennement securisé / confidentiel
   private subscribeCaddyStoringInLocalStorage(){
      this.bsCompteur.subscribe( nextValueOfCompteur =>
                                localStorage.setItem("caddySize",""+nextValueOfCompteur ));
      
      this.bsCaddyContent.subscribe( caddyContent =>
                                localStorage.setItem("caddyContent",JSON.stringify(caddyContent) ));  
   }

   private tryReloadCaddyContentFromLocalStorage(){
     // code à améliorer (tenir compte des exceptions):
      let caddySizeAsString = localStorage.getItem("caddySize");
      if(caddySizeAsString) {
          this._compteur = Number(caddySizeAsString);
          this.bsCompteur.next( this._compteur );
      }
      let caddyContentAsString  = localStorage.getItem("caddyContent");
      if(caddyContentAsString){
        this._caddyContent = JSON.parse(caddyContentAsString);
        this.bsCaddyContent.next( this._caddyContent);
      }
      
   }

   



}
