import { Injectable } from '@angular/core';
import { User } from './models/user.model';
@Injectable()
export class GlobalState {
  Current_Territory_Id:number;
  Current_User_Id:number;
  current_user:User = undefined;
  constructor() { 
  	this.Current_Territory_Id = 1;
  	this.Current_User_Id = Number(localStorage.getItem('currentUser'));
  }
}

