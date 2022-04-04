import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

import { environment } from '../../environments/environment';

import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados(): Observable<Game[]> {
    if (this.juegos.length > 0) {
      console.log('Desde caché');  
      return of(this.juegos);
    } else {
      console.log('Desde internet');  
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap(resp => this.juegos = resp)
        );
    }
  }

}
