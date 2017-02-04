import { Component } from '@angular/core';
//import {MdButton,MdTab,MdTabGroup} from "@angular/material";

@Component({
  selector: 'test-ctrl',
  templateUrl: './test-ctrl.component.html' /*,
  styleUrls: ['./test-ctrl.component.css']*/
})
export class TestCtrlComponent {
  title = 'test-ctrl (buttons,...)';
  a: number = 0;
  b: number = 0;
  res : number;
  
  onCompute = function(event : any) {
      this.res = Number(this.a) + Number(this.b) ; 
  }
}
