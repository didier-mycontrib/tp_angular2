import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
//import {RouteConfig, RouterOutlet} from 'angular2/router';


@Component({
  template:`
  <div id="divWelcome">
        <h3> welcome minibank , Hello {{name}}! </h3> 
		<a  [routerLink]="['Identification']"> identification client </a>       
   </div>
  ` ,
 directives: [ROUTER_DIRECTIVES]  // [routerLink]="['LogicalName'] needs ROUTER_DIRECTIVES
 })
export class WelcomeComponent {
   name : string = "Friend";
}

