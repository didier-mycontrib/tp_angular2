import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  //moduleId: module.id,  // module.id n'est utilisable qu'au sein d'un module commonJs (pas es2015) et pose des problèmes à webpack (de angular CLI)
  //on peut eventuellement compenser cela par un chemin préxifé par "app/" ou "./" (idéal relatif ok avec webpack) ou autre au niveau de templateUrl
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
      private router: Router,
      private heroService: HeroService) {
    }

  ngOnInit(): void {
    this.heroService.getHeroesPromise()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
  let link = ['/detail', hero.id];
  this.router.navigate(link);
}
}