import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { HttpModule }    from '@angular/http';

import { IdentifiedRoutingModule } from './identified-routing.module'; 




import { IdentifieComponent } from './identifie.component';

import { ListeComptesComponent } from './liste-comptes.component';
import { ParamVirementComponent } from './param-virement.component';
import { DernieresOperationsComponent } from './dernieres-operations.component';

import { ClientService } from '../client.service';


@NgModule({
  imports:      [ CommonModule , FormsModule ,  IdentifiedRoutingModule ],
  declarations: [ IdentifieComponent , ListeComptesComponent , ParamVirementComponent , DernieresOperationsComponent ],
  providers:    [ ClientService ]
})
export class IdentifiedModule { }