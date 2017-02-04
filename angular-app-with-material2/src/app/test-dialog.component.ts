import { Component , ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';


@Component({
  selector: 'test-dialog',
  templateUrl: './test-dialog.component.html' /*,
  styleUrls: ['./test-dialog.component.css']*/
})
export class TestDialogComponent {
    
    dlgConfig: MdDialogConfig = new MdDialogConfig();
    constructor(public dialog: MdDialog , private viewContainerRef: ViewContainerRef) {}

    openSimpleDialog() {
      this.dlgConfig.viewContainerRef = this.viewContainerRef;
      this.dialog.open(SimpleDialog, this.dlgConfig);
  }
}


@Component({
    selector: 'dialog-overview-example-dialog',
    template: `
    <p> Hi, I'm a dialog! </p>
    `
  })
  export class SimpleDialog {
    
    constructor(public dialogRef: MdDialogRef<SimpleDialog>) { }
}