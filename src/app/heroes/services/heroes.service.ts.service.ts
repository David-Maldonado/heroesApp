import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class ServiceHeroService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]>{
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  getHeroById(id: string): Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError( err => of(undefined))
      );
  }

  getSuggestions(query: string): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&limit=6`);

  }

}
