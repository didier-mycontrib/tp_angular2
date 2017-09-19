import { Injectable } from '@angular/core';
import { Http , Response , Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { VerifAuth } from "app/verifAuth";
import "./rxjs-extensions";


@Injectable()
export class VerifAuthService {

  private _headers = 
  new Headers({'Content-Type': 'application/json'});

  constructor(private _http : Http) { }

  public verifierAuthentification(verifAuth : VerifAuth)
     : Observable<VerifAuth>{
    let urlWsRest =  "http://localhost:8282/minibank/verifyAuth"; //version nodeJs
    return this._http.post(urlWsRest,
            JSON.stringify(verifAuth),
            {headers: this._headers} )
           .map(response => response.json())
           .catch(e => Observable.throw(e));
  }

}
