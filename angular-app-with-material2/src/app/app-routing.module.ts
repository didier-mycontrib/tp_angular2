import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestCtrlComponent } from './test-ctrl.component'; 
import { TestDialogComponent }     from './test-dialog.component';
import { TestPanelsComponent} from './test-panels.component';



const routes: Routes = [
    { path: '', redirectTo: '/test-ctrl', pathMatch: 'full' },
    { path: 'test-ctrl',  component: TestCtrlComponent },
    { path: 'test-dialog', component: TestDialogComponent },
    { path: 'test-panels',     component: TestPanelsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}