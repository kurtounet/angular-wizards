import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Icharacters } from './characters.model';
import { catchError, filter, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  http = inject(HttpClient);
  baseApi= environment.baseApi;
  getAllCharacters(): Observable<Icharacters[]> {
    return this.http.get<Icharacters[]>(`${this.baseApi}${'characters'}`).pipe(
      catchError(this.handleError)
    );
  }
  getAllCharactersBorn(year:number): Observable<Icharacters[]> {
    return this.http.get<Icharacters[]>(`${this.baseApi}${'characters'}`).pipe(
      map(wizards => wizards.filter(wizard => wizard.yearOfBirth < year)) 
    );
  }

  // fetchAll(): Observable<Icharacters[]> {
  //   return this.http.get<Icharacters[]>(`${this.baseApi}${'characters'}`).pipe(filter(wizards => wizards.length > 0) );
  //     // catchError((this.handleError)

  //     // ));
  // }
/** Gestion des erreurs **/
  private handleError(error: any) {
    console.error("L'api ne fonctionne plus !!!!!", error);
    return throwError("L'api ne fonctionne plus !!!!!");
  }
}
