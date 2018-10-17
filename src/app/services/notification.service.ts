import { Injectable } from '@angular/core';
import { notification } from '../shared-dummy-mock';
import { Notification } from '../models/notification.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as EventSource from 'eventsource';
import {GlobalState} from '../state';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationService {
  private api_base_url = environment.api_base_url;

  notifications:Notification[];
  // url:string = 'http://localhost:8000/notification/myevents/';
  url:string = environment.event_url;
  eventSource:EventSource;
  constructor(private globalState:GlobalState,private http: HttpClient) { }

  getNotificationStream():Observable<any> {
  	return Observable.create((observer)=>{
  		let url = this.url+this.globalState.Current_User_Id+"/";
  		this.eventSource = new EventSource(url);
  		this.eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
        // let json = JSON.parse(event.data);
        // console.log()
        // this.notifications.push(new Notification(json['id'], json['clan_id'], json['clan_name'],json['clan_image']));
        observer.next(event.data);
      };
      // eventSource.onerror = (error) => {
      //   // readyState === 0 (closed) means the remote source closed the connection,
      //   // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
      //   // is to insert a special element in the stream of events, which the client can identify as the last one.
      //   console.log(error)
      //   if(eventSource.readyState === 2) {
      //     console.log('The stream has been closed by the server.');
      //     eventSource.close();
      //     observer.complete();
      //   } else {
      //     console.log('ERRRRRRRRRRR');
      //     // observer.error('EventSource error: ' + error);
      //   }
      // }
  	})
  }
  closeStream(){
    if(this.eventSource)
      this.eventSource.close();
  }
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.api_base_url+"/read_notifications/"+this.globalState.Current_User_Id+"/").pipe(
      catchError(this.handleError('Get Notificaiotns By ID',[]))
      );
  }
  markAsReadNotification(data):Observable<string>{
    return this.http.post<string>(this.api_base_url+"/read_notifications/"+this.globalState.Current_User_Id+"/",data).pipe(
      catchError(this.handleError('Mark as Read Notificaiotns By ID',"error"))
      )
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
