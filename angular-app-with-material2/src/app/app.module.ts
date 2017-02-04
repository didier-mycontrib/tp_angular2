import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

//import { RouterModule }   from '@angular/router'; //for direct RouterModule.forRoot( arrayOfPaths ) in @NgModule/imports
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestCtrlComponent } from './test-ctrl.component'; 
import { TestDialogComponent , SimpleDialog }     from './test-dialog.component';
import { TestPanelsComponent} from './test-panels.component';

@NgModule({
   entryComponents: [ SimpleDialog ],
    declarations: [
    AppComponent , TestCtrlComponent , TestDialogComponent,  TestPanelsComponent , SimpleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
