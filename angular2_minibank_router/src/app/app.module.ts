import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';

//import { RouterModule }   from '@angular/router'; //for direct RouterModule.forRoot( arrayOfPaths ) in @NgModule/imports
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { IdentificationComponent } from './identification.component';


import { IdentifiedModule }         from './identified/identified.module';

import { AppConfig , MY_APP_CONFIG_TOKEN , MY_PROD_APP_CONFIG , MY_DEV_APP_CONFIG } from './app.config';

    
import { ClientService } from './client.service';
import { CompteService } from './compte.service';


@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule, AppRoutingModule , IdentifiedModule ],
  declarations: [ AppComponent , WelcomeComponent , IdentificationComponent   ],
  providers:    [  { provide: MY_APP_CONFIG_TOKEN, useValue: MY_DEV_APP_CONFIG } ,
                  ClientService , CompteService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}