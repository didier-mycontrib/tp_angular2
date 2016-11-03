import { Component } from '@angular/core';

interface Circle {
  x: number;
  y: number;
  r: number;
}

@Component({
  selector: 'my-app',
  template:`
    <h2>{{title}}</h2>
    <div> (x,y)=<b>({{c1.x}} ,{{c1.y}})</b> , r =<b> {{c1.r}} </b> </div>
    <div>
      <label>x: </label> <input [value]="c1.x" placeholder="x"> with [value]="c1.x" attribute synchronisation <br/>
      <label>x: </label> <input [(ngModel)]="c1.x" placeholder="x"> bi-directional via directive [(ngModel)]="c1.x" <br/>
      <label>y: </label> <input (input)="onNewY($event)" placeholder="y"> with (input)="onNewY($event)" event fuction<br/>
      <label>y: </label> <input (input)="c1.y = $event.target.value;" placeholder="y"> with (input)="c1.y = $event.target.value;" event fuction<br/>
      <label>r: </label> <input [(ngModel)]="c1.r" placeholder="r"> bi-directional via directive [(ngModel)]="c1.r" <br/>
    </div>
    <p> l'utilisation de[(ngModel)] necessite l'importation de FormsModule dans app.module.ts </p>
    `
})
export class AppComponent {
  public title = 'Cercle qui va bien';
  public c1: Circle = {
    x: 10,
    y: 20,
    r: 50
  };
  onNewY = function (evt : KeyboardEvent){
     this.c1.y =   (<HTMLInputElement>evt.target).value;
  }
}