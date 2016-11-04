"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
/*
    [class.selected]="..." , [value]="..." is property/attribute binding
    (click)=".." , (change)="..." , (eventName)="..."  is for event handler
    * before *ngFor or before *ngIf means "master template" for current tag (<li> or <div>)
    ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM
    let before hero means local variable of current template
    
    HeroDetailComponent is declared as directive and used with
    <my-hero-detail  [hero]="selectedHero" ></my-hero-detail> where hero is a property of HeroDetailComponent (declared as @Input())
*/
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.msg = "";
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        //this.heroService.getHeroesPromise().then(heroes => this.heroes = heroes );
        var _this = this;
        /* Promise.then() is good , Observable.subscribe() is better */
        this.heroService.getHeroesObservable().subscribe(function (heroes) { return _this.heroes = heroes; } /* , error => this.msg= (<any>error).toString() */);
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        /* this.heroService.createPromise(name)
           .then(hero => {
             this.heroes.push(hero);
             this.selectedHero = null;
           });*/
        this.heroService.createObservable(name)
            .subscribe(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        /*this.heroService
            .deletePromise(hero.id)
            .then(() => {
              this.heroes = this.heroes.filter(h => h !== hero);
              if (this.selectedHero === hero) { this.selectedHero = null; }
            });*/
        this.heroService
            .deleteObservable(hero.id)
            .subscribe(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styles: ["\n    .selected {  width: 150;  background-color: yellow;    color: blue;\n    }\n    .heroes {  color: green;\n    }\n     .heroes li:hover { color: red;   background-color: white;\n    }\n    .heroes .badge {  color: white;   background-color: green;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map