import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { users } from '../shared-dummy-mock';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const AVATAR_IMAGE_NAMES={
    1:'a Autralophitecus Head',
    2:'b Hábilis Head',
    3:'c Ergaster Head',
    4:'d Erectus Head',
    5:'e Antecessor Head',
    6:'f Heidelbergenis Head',
    7:'g Neanderthal Head',
    8:'h Sapiens Head',
}

@Injectable()
export class UserService {

  private api_base_url = environment.api_base_url;
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api_base_url+"/user/").pipe(
      catchError(this.handleError('Get users',[]))
      );
  }
  get_avatar_url(user:User):string{

        if(user.level<0){
            return "";
        }
        var url = "/images/avatars Final/"+user.avatar + AVATAR_IMAGE_NAMES[user.level]+".png"
        return url;
    }
  getUser(id: number): Observable<User>{    
    return this.http.get<User>(this.api_base_url+"/user/"+id).pipe(
      catchError(this.handleError('get_user_by_id',new User))
      );
  	// return of(users.find(item => item.id === id))
  }
  updateUser(user_id:number,data):Observable<any>{
      return this.http.patch(this.api_base_url+"/update_user_profile/"+user_id+"/",data).pipe(
         tap(e=>{}),
         catchError(this.handleError('update user profile','error')))
  }
  JoinClanToUser(user_id:number,clan_id:number){
    this.http.post(this.api_base_url+"/join_user_to_clan/"+user_id+"/",{'joined_clan':clan_id}).subscribe(
      resp => console.log(resp)
      )
    // var user = users.find(item => item.id === user_id);
    // user.joined_clan = clan_id;
  }
  JoinClanToUserFromNotification(user_id:number,clan_id:number):Observable<any>{
    return this.http.post<any>(this.api_base_url+"/join_user_to_clan/"+user_id+"/",{'joined_clan':clan_id}).pipe(
      catchError(this.handleError('JoinClanToUserFromNotification','error')))
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
