import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

/*
    [class.selected]="..." , [value]="..." is property/attribute binding
	(click)=".." , (change)="..." , (eventName)="..."  is for event handler
    * before *ngFor or before *ngIf means "master template" for cuurent tag (<li> or <div>)
	ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM
    # before hero means local variable of current template
*/

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"  [class.selected]="hero === selectedHero"   (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
	
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
    styles:[`
    .selected {	 width: 150;  background-color: yellow;    color: blue;
    }
    .heroes {  color: green;
    }
	 .heroes li:hover { color: red;   background-color: white;
    }
    .heroes .badge {  color: white;   background-color: green;
    }
  `]

})
export class AppComponent {
  public title :string = 'Tour of Heroes';
  public heroes : Hero[]  = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
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
 styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `]
  */
