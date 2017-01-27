import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HighlightDirective} from './highlight.directive';
import {UnlessDirective} from './unless.directive';


import { AppComponent } from './app.component';
import { CoordsFormComponent } from './coords-form.component';
import { MyHeaderComponent } from './myheader.component';


@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent , CoordsFormComponent, MyHeaderComponent , HighlightDirective , UnlessDirective],
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }