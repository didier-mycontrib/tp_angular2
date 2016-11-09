import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes'; //old version without http , without in-memory-web-api
//import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
        
   //private headers = new Headers({'Content-Type': 'application/json'});
        
   //private heroesUrl = 'app/heroes';  // URL to web api

 // constructor(private http: Http) { }
    
  public  getHeroPromise(id: number): Promise<Hero> {
      return this.getHeroesPromise()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
    
  public getHeroesPromise() : Promise< Hero[] > {
    return this.getHeroesPromiseQuickly();
	//return this.getHeroesPromiseSlowly();
    //return this.getHeroesPromiseViaHttp();
  }
  

 private getHeroesPromiseQuickly() : Promise< Hero[] > {
    return Promise.resolve(HEROES);
  }
  
  
  private getHeroesPromiseSlowly() : Promise< Hero[] > {
   return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
  
     
/*
  private getHeroesPromiseViaHttp(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
    
   public update(hero: Hero): Promise<Hero> {
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
   */   
  
  /* pre-version (synchronous)
  getHeroes() : Hero[] {
    return HEROES;
  }*/
  
  
}