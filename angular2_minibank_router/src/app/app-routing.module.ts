import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { IdentificationComponent } from './identification.component';
import { IdentifieComponent } from './identified/identifie.component';



const routes: Routes = [
  { path: 'welcome',  component: WelcomeComponent }, 
  {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
  { path: 'identification',  component: IdentificationComponent }
];
// +   { path: 'clientItendifie/:clientId' ,component: IdentifieComponent } maintenant dans identified/identified-routing.module
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}