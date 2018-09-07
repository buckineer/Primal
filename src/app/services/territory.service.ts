import { Injectable } from '@angular/core';
import {Territory} from '../models/territory.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {territories} from '../shared-dummy-mock';
@Injectable()
export class TerritoryService {

  constructor() { }
  getTerritories(): Observable<Territory[]> {
    return of(territories);
  }
  getTerritory(id:number):Observable<Territory>{
  	return of(territories.find(item => item.id === id))
  }
  getTerritoriesByUser(user_id:number):Observable<Territory[]>{
  	var results:Territory[];
  	results = territories.filter(territory=> territory.id===user_id);
  	return of(results);
  }

}
