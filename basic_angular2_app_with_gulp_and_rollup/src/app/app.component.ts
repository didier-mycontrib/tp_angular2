import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First {{message}} .. </h1> 
        <table border="1"> 
        <tr> <th>i</th> <th>i*i</th> </tr> 
        <tr *ngFor="let i of values" > 
          <td>{{i}}</td> <td>{{i*i}}</td> 
        </tr> 
        </table>`
})
export class AppComponent { 
    message: string ;
    values: number[] = [1,2,3,4,5,6,7,8,9];
    constructor(){
        this.message = "Angular 2 App";
    }
}