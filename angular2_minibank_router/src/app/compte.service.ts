import {Injectable,Inject} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';   
import {Observable}     from 'rxjs/Observable';  // _http.get() return Observable<Response> !!!

import {Compte , Operation , Virement} from './compte';

import { AppConfig , MY_APP_CONFIG_TOKEN} from './app.config';

@Injectable() 
export class CompteService {
        
  private _headers = new Headers({'Content-Type': 'application/json'});
  

  constructor (private _http: Http ,@Inject(MY_APP_CONFIG_TOKEN)  private myAppConfig: AppConfig ) {
    
  } 


  private _compteUrlPart :string = "/comptes" // + ?numClient=...'; // REST call 
  
  private getComptesOfClientObservable(numCli: number,firstAlternativeTry : boolean , withMockedData : boolean) : Observable< Compte[] > {
    if(withMockedData)
      return this.mockedComptesObservable;
    let comptesUrl = null; 
    if(firstAlternativeTry){
       comptesUrl = this.myAppConfig.api_base_url + this._compteUrlPart +"?numClient=" + numCli;
    }
    else{
        comptesUrl = this.myAppConfig.alternative_api_base_url +"/comptes.json";
        }
    console.log( "comptesUrl =  " + comptesUrl);
	return this._http.get(comptesUrl )
                    .map(response => <Compte[]> response.json()  )
                    .catch(e => { if(firstAlternativeTry) { console.log("first try failed with real dynamic url , second try with static app/data/...json"); return this.getComptesOfClientObservable(numCli,false,false);}
                                    else if(this.myAppConfig.mode=="development") { console.log("second try failed - third try using mocked"); return this.getComptesOfClientObservable(numCli,false,true);}
                                      else  {return Observable.throw('error:' + e);}});
  }
    
  public getComptesOfClientObservableWithAlternativeTry(numCli: number) : Observable< Compte[] > {
     return this.getComptesOfClientObservable(numCli,true,false);
  }
    
 //-------------
    
 private _operationUrlPart :string = "/operations" // + ?numCpt=...'; // REST call 
    
 private getOperationsOfCompteObservable(numCpt: number,firstAlternativeTry : boolean , withMockedData : boolean) : Observable< Operation[] > {
    if(withMockedData)
      return this.mockedOperationsObservable;
    let operationsUrl = null; 
    if(firstAlternativeTry){
       operationsUrl = this.myAppConfig.api_base_url + this._operationUrlPart +"?numCpt=" + numCpt;
    }
    else{
        operationsUrl = this.myAppConfig.alternative_api_base_url +"/operations.json";
        }
    console.log( "operationsUrl =  " + operationsUrl);
    return this._http.get(operationsUrl)
                    .map(response => <Operation[]> response.json())
                    .catch(e => { if(firstAlternativeTry) { console.log("first try failed with real dynamic url , second try with static app/data/...json"); return this.getOperationsOfCompteObservable(numCpt,false,false);}
                                    else if(this.myAppConfig.mode=="development") { console.log("second try failed - third try using mocked"); return this.getOperationsOfCompteObservable(numCpt,false,true);}
                                      else  {return Observable.throw('error:' + e);}});
  }
    
  public getOperationsOfCompteObservableWithAlternativeTry(numCpt: number) : Observable< Operation[] > {
     return this.getOperationsOfCompteObservable(numCpt,true,false);
  }
    
  
  //---------
    
     private _virementUrlPart :string = "/virement" // POST REST call 
    
   private postVirementObservable(virement: Virement,firstAlternativeTry : boolean , withMockedAglorithm : boolean): Observable<Virement> {
      if(withMockedAglorithm){
       virement.ok = false;// (without WS REST)
       return Observable.of(virement);
     }
       
     let virementUrl = null;
     if(firstAlternativeTry){
       virementUrl = this.myAppConfig.api_base_url + this._virementUrlPart;
         }
     else{
        virementUrl = this.myAppConfig.alternative_api_base_url + this._virementUrlPart;
        }
     console.log( "virementUrl =  " + virementUrl);
      
       return this._http
        .post(virementUrl, JSON.stringify(virement), {headers: this._headers})
        .map(res => <Virement> res.json())
        .catch(e => { if(firstAlternativeTry) { console.log("first try failed with main url , second try with alternative url"); return this.postVirementObservable(virement,false,false);}
                                    else if(this.myAppConfig.mode=="development") { console.log("second try failed - third try with mocked algorithm"); return this.postVirementObservable(virement,false,true);}
                                      else  {return Observable.throw('error:' + e);}});
   }
    
     public postVirementObservableWithAlternativeTry(virement: Virement): Observable<Virement> {
          return this.postVirementObservable(virement,true,false);
     }
  

//pour test temproraire (sans base):   
private sampleComptes : Compte[]=  [
                        {
                        "numero" : 1,
                        "label" : "compte 1 (courant , mock)",
                        "solde" : 600.0
                        },
                        {
                        "numero" : 2,
                        "label" : "compte 2 (LDD , mock)",
                        "solde" : 3200.0
                        },
                        {
                        "numero" : 3,
                        "label" : "compte 3 (PEL , mock)",
                        "solde" : 6500.0
                        }
                        ];
    
private sampleOperations : Operation[] = [
                {
                "numero" : 1,
                "label" : "achat xy , mock",
                "montant" : -50,
                "dateOp" : "2015-01-20"
                },
                {
                "numero" : 2,
                "label" : "achat zz, mock ",
                "montant" : -90,
                "dateOp" : "2015-02-08"
                },
                {
                "numero" : 3,
                "label" : "salaire , mock",
                "montant" : 2000,
                "dateOp" : "2015-03-18"
                }
                ];

private mockedComptesObservable =  Observable.of(this.sampleComptes);    
private mockedOperationsObservable =  Observable.of(this.sampleOperations);
}
					