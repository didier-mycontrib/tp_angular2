import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `<h3>MyHeader {{title}} .. {{fixedValue}}</h3> 
       date:{{date}} - <input type='button' (click)="riseEvent($event)" value="evt" />
        <hr/>
       
       `
})
export class MyHeaderComponent { 
    @Input()
    title:string;
    
    @Input()
    fixedValue:string;
    
    @Output()
    public myEvent : EventEmitter<{value:string}> = new EventEmitter<{value:string}>();
    
    
    date: Date ;
    
    riseEvent(evt:any){
        this.myEvent.next({value:'texte evement'});
    }
   
    constructor(){
        this.date = new Date();
    }
}