import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IdentifieComponent } from './identifie.component';

import { ListeComptesComponent } from './liste-comptes.component';
import { ParamVirementComponent } from './param-virement.component';
import { DernieresOperationsComponent } from './dernieres-operations.component';

const routes: Routes = [ 
  { path: 'clientItendifie' ,
    children: [
          { path: ":clientId" ,
             children: [
                 { path:'', component: IdentifieComponent }
              ]     
          }
      ]
    }
    /*
    ???? doesn't work (nested route with subcomponent) ???
     ,
      { path:'listeComptes', outlet: 'identifiedOutlet' , component: ListeComptesComponent },
      { path:'paramVirement', outlet: 'identifiedOutlet' , component: ParamVirementComponent },
      { path:'dernieresOperations/:numSelectedCpt', outlet: 'identifiedOutlet'  ,component: DernieresOperationsComponent }
    */
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class IdentifiedRoutingModule {}