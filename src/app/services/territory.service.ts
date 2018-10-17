import { Injectable } from '@angular/core';
import {Territory} from '../models/territory.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import {territories} from '../shared-dummy-mock';

@Injectable()
export class TerritoryService {
  private api_base_url = environment.api_base_url;
  constructor(private http: HttpClient) { }
  
  getTerritories(): Observable<Territory[]> {
    return this.http.get<Territory[]>(this.api_base_url+"/missions/").pipe(
      catchError(this.handleError('getTerritories',[]))
      );
  }
  getTerritory(id:number):Observable<Territory>{
    return this.http.get<Territory>(this.api_base_url+"/missions/"+id+"/").pipe(
      catchError(this.handleError('getTerritorybyId',new Territory))
      );
  }
  getTerritoriesByUser(user_id:number):Observable<Territory[]>{
  	var results:Territory[];
  	results = territories.filter(territory=> territory.id===user_id);
  	return of(results);
  }
  getCurrentMission(): Observable<Territory>{
    return this.http.get<any>(this.api_base_url+"/current_mission").pipe();
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
