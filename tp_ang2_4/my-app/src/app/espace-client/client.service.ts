import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { Client } from "app/espace-client/client";
import "../rxjs-extensions";

@Injectable()
export class ClientService {

  private _basicHeaders = new Headers({'Content-Type': 'application/json'});
  private _headers = this._basicHeaders;

  constructor(private _http : Http) { }

  public rechercherClient(numCli : number)
     : Observable<Client>{
    //let urlWsRest = "http://localhost:8282" + "/minibank/clients/"+numCli; //version nodeJs + MongoDB
	let urlWsRest = "http://localhost:8080" + "/minibank-mvc-rest/mvc/rest/clients/"+numCli; //version Spring-MVC
    this.loadTokenFromLocalStorage();
    return this._http.get(urlWsRest,{headers: this._headers})
           .map(response => response.json())
           .catch(e => Observable.throw(e));
  }

  loadTokenFromLocalStorage(){
     var token = localStorage.getItem('token');
     if(token){
       console.log("token in localStorage:" + token);
       this._headers= this._basicHeaders;
       this._headers.set('Authorization','Bearer ' + token);                                 
     }
  }

}
