import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template:`
   <div >
        <h3> {{title}} </h3> 
		   numClient:<input type="text" [(ngModel)]="numClient"/> <i>(ex: 1)</i> <br/>
		   password:<input type="text" [(ngModel)]="password"/> <i>(ex: pwd1)</i><br/>
		   <!-- <a routerLink="????" [hidden]="password != 'pwd'+numClient" > vers espace client identifie . </a> <br/> --> 
          <button (click)="onNavigate()" [hidden]="password != 'pwd'+numClient" > vers espace client identifie </button> <br/>
		 </div>  
  ` 
 })
export class IdentificationComponent {
   title : string = "identification client minibank";
   numClient : number;
   password : string;
   constructor(private _router: Router){
   }
  
   onNavigate() : void {
      let link = ['/clientItendifie', this.numClient];
     this._router.navigate( link  );   
      
      //this._router.navigateByUrl(`/clientItendifie/${this.numClient}`); //avec  quote inverse `...` !!!
  }
}

