import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';   // HTTP_PROVIDERS must be included in bootstrap !!!!
import {Observable}     from 'rxjs/Observable';  // _http.get() return Observable<Response> !!!

import {Adresse, Client} from './client';

@Injectable()
export class ClientService {

  constructor (private _http: Http) {
  }

  private _clientUrl = 'app/data/client.json'; // data in static '.json" file
  //private _clientUrl = '.../client/ + ...'; // REST call 


 
  public getClientObservable(numCli: number) : Observable< Client > {
	return this._http.get(this._clientUrl)
                    .map(response => <Client> response.json())
                    .catch(this.handleErrorObservable);
  }
  
  public getClientPromise(numCli: number) : Promise< Client > {
    // return clientPromise; //mock data in current file
	return this._http.get(this._clientUrl)
					/*.toPromise()
                    .then(response => <Client> response.json(), this.handleErrorPromise);*/
	
	                .toPromise()
                    .then(response => <Client> response.json())
                    .catch(this.handleErrorPromise);
	
	
                   /* .map(response => <Client> response.json());
					.toPromise();*/
	          
  }
  
   private handleErrorObservable (error: any) {
    console.log(error);
    return Observable.throw('Server error' + error);
  }
  
  private handleErrorPromise (error: any) {
   console.log(error);
   return Promise.reject('Server error' + error);
}

   
}

/*
var sampleClient : Client= {"numero" : 1,
						"nom": "Therieur",
						"prenom": "alex", 
						"adresse" : { "idAdr" :1 ,"rue" : "123 - rue elle" , "codePostal" : "750015", "ville" : "Par ici"  },
						"telephone" : "0102030405" ,
						"email" : "alex.therieur@ici-ou-la-bas.fr" 
						};
						
var clientPromise = Promise.resolve(sampleClient);
*/					