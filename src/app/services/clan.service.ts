import { Injectable } from '@angular/core';
import { Clan } from '../models/clan.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { clans } from '../shared-dummy-mock';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class ClanService {
  private api_base_url = environment.api_base_url;
  constructor(private http: HttpClient) { }
  getClans(): Observable<Clan[]> {
    return this.http.get<Clan[]>(this.api_base_url+"/clan/").pipe(
      catchError(this.handleError('getClans',[]))
      );
  }
  getClan(id:number):Observable<Clan>{
    return this.http.get<Clan>(this.api_base_url+"/clan/"+id+"/").pipe(
      catchError(this.handleError('getClanbyId',new Clan))
      );
  }
  addClan(clan:Clan):Observable<Clan>{
    return this.http.post<Clan>(this.api_base_url+"/create_clan/",clan).pipe(
      catchError(this.handleError('addClan',new Clan(-1,)))
      )
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
