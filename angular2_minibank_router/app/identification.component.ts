import {Component} from 'angular2/core';
//import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template:`
   <div >
        <h3> {{title}} </h3> 
		   numClient:<input type="text" [(ngModel)]="numClient"/> <i>(ex: 1)</i> <br/>
		   password:<input type="text" [(ngModel)]="password"/> <i>(ex: pwd1)</i><br/>
		   <a [routerLink]="['Identifie',  { clientId: numClient }]" [hidden]="password != 'pwd'+numClient" > vers espace client identifie . </a> <br/>
          <!-- <a (click)="onNavigate()" [hidden]="password != 'pwd'+numClient" > vers espace client identifie </a> <br/> -->
		 </div>  
  ` ,
 directives: [ROUTER_DIRECTIVES] 
 })
export class IdentificationComponent {
   title : string = "identification client minibank";
   numClient : number;
   password : string;
   constructor(private _router: Router){
   }
   /*
   onNavigate() {
      this._router.navigate( ['Identifie', { clientId: this.numClient }]  );
  }*/
}

