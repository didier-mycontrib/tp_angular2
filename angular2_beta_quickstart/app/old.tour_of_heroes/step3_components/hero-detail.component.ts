import {Component} from 'angular2/core';
import {Hero} from './hero';

/*
 'hero' property of HeroDetail (Sub)Component must be declared as part of "inputs"
 and this HeroDetailComponent should be declared as directive of parent component
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
  `,
  inputs: ['hero']
 })
export class HeroDetailComponent {
   public hero: Hero; 
}

// hero is a property of HeroDetail (Sub)Component