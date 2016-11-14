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
  //moduleId: module.id,  // module.id n'est utilisable qu'au sein d'un module commonJs (pas es2015)
  //on peut eventuellement compenser cela par un chemin préxifé par "app/" ou autre au niveau de templateUrl
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
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
  public msg: string = "";
  public heroes : Hero[] ;
  public selectedHero: Hero;
    
  constructor(
    private router: Router,
    private heroService: HeroService) { }
    
    ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    //this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes );
      
   /* Promise.then() is good , Observable.subscribe() is better */
      
    this.heroService.getHeroesObservable().subscribe(heroes => this.heroes = heroes /* , error => this.msg= (<any>error).toString() */);
  }  
    
  onSelect(hero: Hero) { this.selectedHero = hero; }
    
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
    
    
   public add(name: string): void {
      name = name.trim();
      if (!name) { return; }
     /* this.heroService.createPromise(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });*/
       this.heroService.createObservable(name)
        .subscribe(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }

   public  delete(hero: Hero): void {
      /*this.heroService
          .deletePromise(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });*/
      this.heroService
          .deleteObservable(hero.id)
          .subscribe(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }

 }


