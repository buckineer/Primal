import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { users } from './shared-dummy-mock';

@Injectable()
export class UserService {

  constructor() { }
  
  getUsers(): Observable<User[]> {
    return of(users);
  }

  getUser(id: number): Observable<User>{
  	return of(users.find(item => item.id === id))
  }
}