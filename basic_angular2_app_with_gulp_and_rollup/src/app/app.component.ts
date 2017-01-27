import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `
        <my-header [title]="headerTitle" fixedValue="**" 
                   (myEvent)="onMyEvent($event)" ></my-header>
        <h1>My First {{message}} .. {{message2}}</h1> 
        <table border="1"> 
        <tr> <th>i</th> <th>i*i</th> </tr> 
        <tr *ngFor="let i of values" > 
          <td>{{i}}</td> <td>{{i*i}}</td> 
        </tr> 
        </table> <br/>
        <span myHighlight='yellow'>Highlight me!</span> <br/>
        <span myHighlight>Highlight 2 with default red color</span> <br/>
        <span myHighlight defaultColor='cyan'>Highlight 2 with default cyan color</span> <br/>
        <h4>Pick a highlight color</h4>
        <div>  <input type="radio" name="colors" (click)="color='lightgreen'" id="r1" /> <label for="r1">Green</label>
               <input type="radio" name="colors" (click)="color='yellow'" id="r2" /><label for="r2">Yellow</label>
               <input type="radio" name="colors" (click)="color='cyan'" id="r3" /><label for="r3">Cyan</label>
        </div> 
        <span [myHighlight]="color"> Highlight with choosen color</span> <br/>
        <hr/>
        age: <input type='text' [(ngModel)]="age" /><br/>
        <p *myUnless="age>=18">
          condition "age>=18" is false and myUnless is true.
        </p> <br/>
        <p *myUnless="!(age>=18)">
          condition "age>=18" is true and myUnless is false.
        </p> 
        <hr/>
        <coords-form></coords-form>
        `
})
export class AppComponent { 
    headerTitle :string = 'titre1';
    message: string ;
    message2: string ;
    values: number[] = [1,2,3,4,5,6,7,8,9];
    
    onMyEvent(evt:any){
        console.log(evt); 
        this.message2 = evt.value;   
    }
    
    constructor(){
        this.message = "Angular 2 App";
    }
}