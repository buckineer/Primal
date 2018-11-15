import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
@Injectable()
export class AuthService {
  private api_base_url = environment.api_base_url;
  constructor(private http: HttpClient,private router: Router,private notificationService:NotificationService) { }

  login(user_id: string, password: string):Observable<any> {
    var reqHeader = new HttpHeaders({ 'No-Auth':'True' });
    return this.http.post(this.api_base_url+"/api-token-auth/",{'username':user_id,'password':password}, { headers: reqHeader }).pipe(
      catchError(this.handleError('login',['error']))
      )      
  }
  reset_password(email:string):Observable<any>{
    var reqHeader = new HttpHeaders({ 'No-Auth':'True' });
    return this.http.post(this.api_base_url+"/reset_password/",{'email':email}, { headers: reqHeader }).pipe(
      catchError(this.handleError('reset_password',{'type':'error','message':'unknown'}))
      )
  }
  update_password(old_pwd , new_pwd:string):Observable<any>{
    var data={'old_pwd':old_pwd,'new_pwd':new_pwd};
    return this.http.post(this.api_base_url+"/update_password/",data).pipe(
      catchError(this.handleError('update_password',{'type':'error','message':'unknown'}))
      )
  }
  get_current_user():Observable<any>{
    return this.http.get(this.api_base_url+"/current_user/").pipe(
      catchError(this.handleError('login',['error']))
      )     
  }
  logout(): any {
    this.http.post(this.api_base_url+"/logout/",{}).subscribe(ret_value=>{
      if(ret_value['type']=="success"){
        this.notificationService.closeStream();
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser'); 
        this.router.navigate(['/login'])
      }
    })
  }

  getUser(): any {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      console.log(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
