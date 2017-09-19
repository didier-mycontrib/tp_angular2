import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HttpModule }    from '@angular/http'; 
import { ClientService } from "app/espace-client/client.service";
@NgModule({
  imports: [
    CommonModule , HttpModule
  ],
  providers: [ ClientService ],
  declarations: [ClientDetailsComponent]
})
export class EspaceClientModule { }
