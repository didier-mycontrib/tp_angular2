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
var mock_heroes_1 = require('./mock-heroes'); //old version without http , without in-memory-web-api
//import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
var HeroService = (function () {
    function HeroService() {
    }
    //private headers = new Headers({'Content-Type': 'application/json'});
    //private heroesUrl = 'app/heroes';  // URL to web api
    // constructor(private http: Http) { }
    HeroService.prototype.getHeroPromise = function (id) {
        return this.getHeroesPromise()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroesPromise = function () {
        return this.getHeroesPromiseQuickly();
        //return this.getHeroesPromiseSlowly();
        //return this.getHeroesPromiseViaHttp();
    };
    HeroService.prototype.getHeroesPromiseQuickly = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.getHeroesPromiseSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        } // 2 seconds
        );
    };
    HeroService = __decorate([
        //old version without http , without in-memory-web-api
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map