import { Component, OnInit } from '@angular/core';
import { Client } from "app/espace-client/client";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientService } from "app/espace-client/client.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  numClient : number;
  client : Client = new Client();

  constructor(private _route : ActivatedRoute,
     private _clientService : ClientService) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params : Params) => {
        //NB: :clientId dans routing-modules
        this.numClient = params["clientId"];
        this.fetchClient(); }
    );
  }

  fetchClient(){
    //this.client = new Client(this.numClient,
      //     "nomQuiVaBien","prenomXy")
    this._clientService
         .rechercherClient(this.numClient)
          .subscribe( cli => this.client = cli ,
                    e => console.log("error"+e));
  }

}
