import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { RouterModule }   from '@angular/router'; //for direct RouterModule.forRoot( arrayOfPaths ) in @NgModule/imports
import { AppRoutingModule } from './app-routing.module'; 

import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroService }         from './hero.service';
import { ComputeService }         from './compute.service';

import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent} from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';
import { VatComponent } from './vat.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule , AppRoutingModule,  HttpModule ,
                  InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],
  declarations: [ AppComponent , HeroDetailComponent , HeroesComponent , DashboardComponent , HeroSearchComponent , VatComponent],
  providers:    [ HeroService  , ComputeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }