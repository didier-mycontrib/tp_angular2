import { Component , Input} from '@angular/core';
import {Hero} from './hero';

/*
 'hero' property of HeroDetail (Sub)Component must be declared as part of "@Input()"
 and this HeroDetailComponent should be declared in app.module.ts
*/


@Component({
  selector: 'my-hero-detail',
  template:`
   <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
 })
export class HeroDetailComponent {
   @Input()
   public hero: Hero; 
}

// hero is a property of HeroDetail (Sub)Component