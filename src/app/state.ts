import { Injectable } from '@angular/core';
@Injectable()
export class GlobalState {
  Current_Territory_Id:number;
  Current_User_Id:number;
  constructor() { 
  	this.Current_Territory_Id = 1;
  	this.Current_User_Id = 1;
  }
}

