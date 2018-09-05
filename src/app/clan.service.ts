import { Injectable } from '@angular/core';
import { Clan } from './clan.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {clans} from './shared-dummy-mock';
import { User } from './user.model';

@Injectable()
export class ClanService {
 
  constructor() { }
  getClans(): Observable<Clan[]> {
    return of(clans);
  }
  getClan(id:number):Observable<Clan>{
  	return of(clans.find(item => item.id === id))
  }
  
}
