import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import {Hero} from './hero';


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
  `],
  providers: [HeroService]
})
//NB: HeroDetailComponent doit etre declare dans app.module.ts
    
export class AppComponent implements OnInit {
  public title :string = 'Tour of Heroes';
  public heroes : Hero[] ;
  public selectedHero: Hero;
    
  constructor(private heroService: HeroService) { }
    
    ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes);
  }  
    
  onSelect(hero: Hero) { this.selectedHero = hero; }
}




