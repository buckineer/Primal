import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { color_list, clan_avatar_list, clans, info, gift, user_avatar_list } from './shared-dummy-mock';

import { Clan } from './clan.model';
import { Info } from './info.model';
import { Gift } from './gift.model';

@Injectable()
export class CommonService {

  constructor() { }

  getColors(): Observable<string[]> {
    return of(color_list);
  }

  getClanImages():Observable<string[]>{
  	return of(clan_avatar_list);
  }

  getInfo(): Observable<Info[]>{
    return of(info);
  }

  getClans(): Observable<Clan[]>{
    return of(clans);
  }

  getGift(): Observable<Gift[]>{
    return of(gift);
  }

  getAvatarImages():Observable<string[]>{
  	return of(user_avatar_list);
  }
}
