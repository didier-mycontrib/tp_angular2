import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';


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
  moduleId: module.id,
  selector: 'my-heroes',
  template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"  [class.selected]="hero === selectedHero"   (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    
    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
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
    
export class HeroesComponent implements OnInit {
  public heroes : Hero[] ;
  public selectedHero: Hero;
    
  constructor(
    private router: Router,
    private heroService: HeroService) { }
    
    ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes);
  }  
    
  onSelect(hero: Hero) { this.selectedHero = hero; }
    
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}




