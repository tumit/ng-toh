import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  baseUrl = 'http://localhost:8080/heroes';

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.baseUrl);
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(this.baseUrl + '/' + id);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(this.baseUrl + '/' + hero.id, hero);
  }

  addNewHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.baseUrl, hero);
  }

  deleteHero(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + '/' + id);
  }

  existsName(name: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.baseUrl + '?name=' + name);
  }
}
