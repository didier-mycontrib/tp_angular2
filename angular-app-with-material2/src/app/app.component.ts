import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import {MdButton,MdTab,MdTabGroup} from "@angular/material";

interface MenuEntry {
    label : string;
    routerLink : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my @angular/material app';
  menuEntries : MenuEntry[] = [{ label : "material controls (buttons, ...)" , routerLink : "/test-ctrl" },
                               { label : "material panels" , routerLink : "/test-panels" },
                               { label : "material dialogs" , routerLink : "/test-dialog" }
                               ];
  
  constructor(private _router: Router){ 
  }
  
  /*
   <nav md-tab-nav-bar>
         <a md-tab-link *ngFor="let me of menuEntries"  (click)="onSelectTab(me.routerLink)"> 
            {{me.label}}
        </a>
    </nav>
   */
  /*
  onSelectTab(routerLink :  string):void {
      //console.log(routerLink);
      this._router.navigateByUrl(routerLink);
  }*/
}
