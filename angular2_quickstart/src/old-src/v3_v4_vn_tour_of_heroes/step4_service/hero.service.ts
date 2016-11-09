import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

  public getHeroesPromise() : Promise< Hero[] > {
    return this.getHeroesPromiseQuickly();
	//return this.getHeroesPromiseSlowly();
  }
  

 private getHeroesPromiseQuickly() : Promise< Hero[] > {
    return Promise.resolve(HEROES);
  }
  
  
  private getHeroesPromiseSlowly() : Promise< Hero[] > {
   return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
  );
 }
  
  /* pre-version (synchronous)
  getHeroes() : Hero[] {
    return HEROES;
  }*/
  
  
}