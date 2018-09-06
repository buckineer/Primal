import { Injectable } from '@angular/core';
@Injectable()
export class GlobalState {
  Current_Territory_Id:Number;
  constructor() { 
  	this.Current_Territory_Id = -1;
  }
}

