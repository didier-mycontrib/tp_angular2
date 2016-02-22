import {Component} from 'angular2/core';
/* import {Injector} from 'angular2/core'; */
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

/*
    [class.selected]="..." , [value]="..." is property/attribute binding
	(click)=".." , (change)="..." , (eventName)="..."  is for event handler
    * before *ngFor or before *ngIf means "master template" for cuurent tag (<li> or <div>)
	ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM
    # before hero means local variable of current template
	
	HeroDetailComponent is declared as directive and used with
	<my-hero-detail  [hero]="selectedHero" ></my-hero-detail> where hero is a property of HeroDetailComponent (declared in inputs)
	
	HeroService is declared in "providers" list of @Component metadata (so it is candidate for injection)
	injection occurs here in constructor
	ngOnInit() of OnInit interface is a angular2 lifeCycle init method (like @PostConstruct in java/jee)
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
	
    <my-hero-detail  [hero]="selectedHero" ></my-hero-detail>
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
  `] , 
   directives: [HeroDetailComponent] /* ,
   providers: [HeroService] */
})
export class AppComponent implements OnInit{
  public title :string = 'Tour of Heroes';
  public heroes : Hero[];
  public selectedHero: Hero;
  private _heroService: HeroService;
  constructor(heroService: HeroService) {
    this._heroService=heroService;
    //keep it simple (don't retreive data at this early stage)
	//ngOnInit() of OnInit LifeCycle interface is a better stage
	//the "_" first character is a convention for private property name
  } ;

  /*
  constructor (){
     var injector = Injector.resolveAndCreate([HeroService]);
     this._heroService = injector.get(HeroService);
  }
  */
  fetchHeroes() {
    // (pre version without Promise):   this.heroes = this._heroService.getHeroes();
	this._heroService.getHeroesPromise().then(arrayOfHero => this.heroes = arrayOfHero);
  }
  ngOnInit() {
    this.fetchHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}



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
