import { Injectable } from '@angular/core';
import {Territory} from './territory/territory.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {territories} from './shared-dummy-mock';
@Injectable()
export class TerritoryService {

  constructor() { }
  getTerritories(): Observable<Territory[]> {
    return of(territories);
  }
}
