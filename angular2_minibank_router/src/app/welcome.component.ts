import {Component} from '@angular/core';

@Component({
  template:`
  <div id="divWelcome">
        <h3> welcome minibank , Hello {{name}}! </h3> 
		<a  routerLink="/identification"> identification client </a>       
   </div>
  ` 
 })
export class WelcomeComponent {
   name : string = "Friend";
}

