import { Injectable } from '@angular/core';
import { notification } from './shared-dummy-mock';
import { Notification } from './notification.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NotificationService {

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    return of(notification);
  }
}
