
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Hero} from './hero';
import { HeroService } from './hero.service';
/*
 'hero' property of HeroDetail (Sub)Component must be declared as part of "@Input()"
 and this HeroDetailComponent should be declared in app.module.ts
*/


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  template:`
   <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
     <hr/>
      <button (click)="goBack()">Back</button>
     <hr/>
     <!-- <button (click)="save()">Save</button> <br/> -->
     {{msg}}
    </div>
  `/*,
  providers: [HeroService]*/
 })
export class HeroDetailComponent implements OnInit{
   msg:string ="";
   @Input()
   public hero: Hero; 

   constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.heroService.getHeroPromise(id)
      .then(hero => this.hero = hero);
  });
}

goBack(): void {
  this.location.back();
}

    /*
    save(): void {
      this.heroService.update(this.hero)
         .then(() => this.msg="updated");
       }*/
}

// hero is a property of HeroDetail (Sub)Component