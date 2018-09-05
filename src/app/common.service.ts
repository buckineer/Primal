import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {color_list,clan_avatar_list} from './shared-dummy-mock';
@Injectable()
export class CommonService {

  constructor() { }
  getColors(): Observable<string[]> {
    return of(color_list);
  }
  getClanImages():Observable<string[]>{
  	return of(clan_avatar_list);
  }
}
