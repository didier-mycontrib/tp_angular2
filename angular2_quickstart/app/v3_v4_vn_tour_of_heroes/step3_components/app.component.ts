import { Component } from '@angular/core';

import {Hero} from './hero';

const HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

/*
    [class.selected]="..." , [value]="..." is property/attribute binding
    (click)=".." , (change)="..." , (eventName)="..."  is for event handler
    * before *ngFor or before *ngIf means "master template" for current tag (<li> or <div>)
    ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM
    let before hero means local variable of current template
    
    HeroDetailComponent is declared as directive and used with
    <my-hero-detail  [hero]="selectedHero" ></my-hero-detail> where hero is a property of HeroDetailComponent (declared as @Input())
*/

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"  [class.selected]="hero === selectedHero"   (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    
    <my-hero-detail  [hero]="selectedHero" ></my-hero-detail>
  `,
    styles:[`
    .selected {  width: 150;  background-color: yellow;    color: blue;
    }
    .heroes {  color: green;
    }
     .heroes li:hover { color: red;   background-color: white;
    }
    .heroes .badge {  color: white;   background-color: green;
    }
  `]
})
//NB: HeroDetailComponent doit etre declare dans app.module.ts
    
export class AppComponent {
  public title :string = 'Tour of Heroes';
  public heroes : Hero[]  = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}




