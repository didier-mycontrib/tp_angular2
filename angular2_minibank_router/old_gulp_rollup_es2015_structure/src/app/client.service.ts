import {Injectable,Inject} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';   
import {Observable}     from 'rxjs/Observable';  // _http.get() return Observable<Response> !!!

import {Adresse, Client , ClientAuth} from './client';

import { AppConfig , MY_APP_CONFIG_TOKEN} from './app.config';

@Injectable()
export class ClientService {
        
  private _headers = new Headers({'Content-Type': 'application/json'});
  

  constructor (private _http: Http ,@Inject(MY_APP_CONFIG_TOKEN)  private myAppConfig: AppConfig ) {
    
  }


  private _clientUrlPart :string = "/clients" // + ...'; // REST call 


  private getClientObservable(numCli: number,firstAlternativeTry : boolean , withMockedData : boolean) : Observable< Client > {
    if(withMockedData)
      return this.mockedClientObservable;
    let clientUrl : string = null; 
    if(firstAlternativeTry){
       clientUrl = this.myAppConfig.api_base_url + this._clientUrlPart +"/" + numCli;
    }
    else{
        clientUrl = this.myAppConfig.alternative_api_base_url +"/client.json";
        }
    console.log( "clientUrl =  " + clientUrl);
	return this._http.get(clientUrl)
                    .map(response => <Client> response.json())
                    .catch(e => { if(firstAlternativeTry) { console.log("first try failed with real dynamic url , second try with static app/data/...json"); return this.getClientObservable(numCli,false,false);}
                                    else if(this.myAppConfig.mode=="development") { console.log("second try failed - third try using mocked"); return this.getClientObservable(numCli,false,true);}
                                      else  {return Observable.throw('error:' + e);}});
  }
    
  public getClientObservableWithAlternativeTry(numCli: number) : Observable< Client > {
     return this.getClientObservable(numCli,true,false);
  }
    
   private _verifyAuthUrlPart :string = "/verifyAuth" // POST REST call 
    
   private verifyClientAuthObservable(clientAuth: ClientAuth,firstAlternativeTry : boolean , withMockedAglorithm : boolean): Observable<ClientAuth> {
      if(withMockedAglorithm){
       if(clientAuth.password == "pwd" + clientAuth.numClient) {
           clientAuth.ok = true; 
           }
          else {
           clientAuth.ok = false; 
           }
       return Observable.of(clientAuth);
     }
       
     let verifyAuthUrl : string = null;
     if(firstAlternativeTry){
       verifyAuthUrl = this.myAppConfig.api_base_url + this._verifyAuthUrlPart;
         }
     else{
        verifyAuthUrl = this.myAppConfig.alternative_api_base_url + this._verifyAuthUrlPart;
        }
     console.log( "verifyAuthUrl =  " + verifyAuthUrl);
      
       return this._http
        .post(verifyAuthUrl, JSON.stringify(clientAuth), {headers: this._headers})
        .map(res => <ClientAuth> res.json())
        .catch(e => { if(firstAlternativeTry) { console.log("first try failed with main url , second try with alternative url"); return this.verifyClientAuthObservable(clientAuth,false,false);}
                                    else if(this.myAppConfig.mode=="development") { console.log("second try failed - third try with mocked algorithm"); return this.verifyClientAuthObservable(clientAuth,false,true);}
                                      else  {return Observable.throw('error:' + e);}});
   }
    
     public verifyClientAuthObservableWithAlternativeTry(clientAuth: ClientAuth): Observable<ClientAuth> {
          return this.verifyClientAuthObservable(clientAuth,true,false);
     }
  
  /*
  public getClientPromise(numCli: number) : Promise< Client > {
    //return this.mockedClientPromise; //mock data in current file
	return this._http.get( this.myAppConfig.api_base_url + this._clientUrlPart +"/" + numCli)
	                .toPromise()
                    .then(response => <Client> response.json())
                    .catch(this.handleErrorPromise);
      
  }*/
    

 
   private handleErrorObservable (error: any) {
    console.log("handleErrorObservable_error:" +error);
    return Observable.throw('Server error:' + error);
  }
 
   /*
  private handleErrorPromise (error: any) {
   console.log(error);
   return Promise.reject('Server error' + error);
}*/

//pour test temproraire (sans base):   
private sampleClient : Client= {"numero" : 1,
						"nom": "Therieur_MOCK",
						"prenom": "alex", 
						"adresse" : { "idAdr" :1 ,"rue" : "123 - rue elle" , "codePostal" : "750015", "ville" : "Par ici"  },
						"telephone" : "0102030405" ,
						"email" : "alex.therieur@mock.fr" 
						};

private mockedClientObservable =  Observable.of(this.sampleClient);    
//private mockedClientPromise = Promise.resolve(this.sampleClient);
}
					