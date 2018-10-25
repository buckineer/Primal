import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { color_list, clan_avatar_list, clans, info, gift, user_avatar_list } from '../shared-dummy-mock';

import { Clan } from '../models/clan.model';
import { Info } from '../models/info.model';
import { Gift } from '../models/gift.model';
import { GiftTrack } from '../models/gifttrack.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {GlobalState} from '../state';
@Injectable()
export class CommonService {
  private api_base_url = environment.api_base_url;

  constructor(private globalState:GlobalState,private http: HttpClient) { }

  sendInvite(data):Observable<string>{
      return this.http.post<string>(this.api_base_url+"/send_invites/"+this.globalState.Current_User_Id+"/",data).pipe(
    catchError(this.handleError('Send Invite',"error"))
    );
  }
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

  getGifts(): Observable<Gift[]>{
    return this.http.get<Gift[]>(this.api_base_url+"/gifts/"+this.globalState.Current_User_Id+"/").pipe(
      catchError(this.handleError('Get Gifts By User Id',[]))
      );
  }
  buyGifts(gift_id):Observable<any>{
    return this.http.post(this.api_base_url+"/gifts/"+this.globalState.Current_User_Id+"/",{'gift':gift_id}).pipe(
      catchError(this.handleError('purchase gift','error'))
      );
  }

  getGiftsByUser(): Observable<any>{
    return this.http.get<GiftTrack[]>(this.api_base_url+"/gifttrack/"+this.globalState.Current_User_Id+"/").pipe(
      catchError(this.handleError('get Gifts by user', 'error'))
    );
  }

  getAvatarImages():Observable<any[]>{
  	return of(user_avatar_list);
  }

  getGiftById(gift_id): Observable<any>{
    return this.http.get<Gift>(this.api_base_url+"/gift/"+gift_id+"/").pipe(
      catchError(this.handleError('get Gift by Id', 'error'))
    );
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

