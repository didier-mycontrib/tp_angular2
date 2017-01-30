import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import {HEROES} from './mock-heroes'; //old version without http , without in-memory-web-api
import { Headers, Http } from '@angular/http';

import {Observable}     from 'rxjs/Observable'; 


@Injectable()
export class HeroService {
        
   private headers = new Headers({'Content-Type': 'application/json'});
        
   private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }
    
  public  getHeroPromise(id: number): Promise<Hero> {
      return this.getHeroesPromise()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
    
  public getHeroesPromise() : Promise< Hero[] > {
    //return this.getHeroesPromiseQuickly();
	//return this.getHeroesPromiseSlowly();
    return this.getHeroesPromiseViaHttp();
  }
    

  public getHeroesObservable() : Observable< Hero[] > {
    return this.http.get(this.heroesUrl)
               .map(response => response.json().data as Hero[]);
              // .catch(this.handleErrorObservable);  ???            
  }  
 
  
/*
 private getHeroesPromiseQuickly() : Promise< Hero[] > {
    return Promise.resolve(HEROES);
  }
  
  
  private getHeroesPromiseSlowly() : Promise< Hero[] > {
   return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
  */
     

  private getHeroesPromiseViaHttp(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
    
   public updatePromise(hero: Hero): Promise<Hero> {
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
    
    public updateObservable(hero: Hero): Observable<Hero> {
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .map(() => hero)
        .catch(this.handleErrorObservable);
    }
    
    public createPromise(name: string): Promise<Hero> {
      return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    
    public createObservable(name: string): Observable<Hero> {
      return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .map(res => res.json().data)
        .catch(this.handleErrorObservable);
    }
    
    public deletePromise(id: number): Promise<void> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
     public deleteObservable(id: number): Observable<void> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .map(() => null)
        .catch(this.handleErrorObservable);
    }
    
    private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
     private handleErrorObservable (error: any) {
    console.log(error);
    return Observable.throw('Server error' + error);
  }
    
  
  /* pre-version (synchronous)
  getHeroes() : Hero[] {
    return HEROES;
  }*/
  
  
}