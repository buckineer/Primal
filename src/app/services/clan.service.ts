import { Injectable } from '@angular/core';
import { Clan } from '../models/clan.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { clans } from '../shared-dummy-mock';

@Injectable()
export class ClanService {
 
  constructor() { }
  getClans(): Observable<Clan[]> {
    return of(clans);
  }
  getClan(id:number):Observable<Clan>{
  	return of(clans.find(item => item.id === id))
  }
  addClan(clan:Clan):Observable<Clan>{
  	clan.id = clans.length+1;
  	clans.push(clan);
    console.log(clans);
    return of(clan);
  }
  
}