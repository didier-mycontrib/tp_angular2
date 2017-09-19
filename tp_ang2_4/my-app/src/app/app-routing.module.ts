import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { TvaComponent } from "app/tva/tva.component";
import { LoginComponent } from "app/login/login.component";
import { ClientDetailsComponent } from "app/espace-client/client-details/client-details.component";
const routes: Routes = [ 
     { path: 'welcome',  component: TvaComponent }, 
     {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'}, 
      { path: 'login',  component: LoginComponent } ,  
      { path: 'clientIdentifie/:clientId' ,
           component: ClientDetailsComponent } 
    ];
@NgModule({  
    imports: [ RouterModule.forRoot(routes) ],  
    exports: [ RouterModule ] }) 
export class AppRoutingModule {}