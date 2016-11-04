import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';

//import { RouterModule }   from '@angular/router'; //for direct RouterModule.forRoot( arrayOfPaths ) in @NgModule/imports
import { AppRoutingModule } from './app-routing.module'; 

//old beta2: import {ROUTER_PROVIDERS} from '@angular/router';
//old beta2: import {HTTP_PROVIDERS} from '@angular/http';

// Add all operators to Observable (useful for Http)
//old beta2: import 'rxjs/Rx';

//old beta2 : bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS]);

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { IdentificationComponent } from './identification.component';


//import { IdentifieComponent } from './identified/identifie.component';
import { IdentifiedModule }         from './identified/identified.module';


import { ClientService } from './client.service';


@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule, AppRoutingModule , IdentifiedModule ],
  declarations: [ AppComponent , WelcomeComponent , IdentificationComponent   ],
  providers:    [ ClientService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }