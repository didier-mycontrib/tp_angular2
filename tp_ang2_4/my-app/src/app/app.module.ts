
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent} from './app.component';
import { TvaComponent } from './tva/tva.component';
import { MyHeaderComponent } from './my-header/my-header.component';

import { CaddyService } from './caddy.service';
import { SelectionComponent } from './selection/selection.component';
import { CommandeComponent } from './commande/commande.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EspaceClientModule } from "app/espace-client/espace-client.module";
import { VerifAuthService } from "app/verif-auth.service";
import { HttpModule } from "@angular/http";



@NgModule({
  imports:      [ BrowserModule , FormsModule , AppRoutingModule , EspaceClientModule , HttpModule ],
  declarations: [ AppComponent, TvaComponent, MyHeaderComponent, SelectionComponent, CommandeComponent, LoginComponent   ],
  providers:    [  CaddyService , VerifAuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}