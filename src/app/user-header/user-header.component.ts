import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import {GlobalState} from '../state';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  
  user: User;
  constructor(public userService:UserService,public globalState:GlobalState) { }

  ngOnInit() {
	this.userService.getUser(this.globalState.Current_User_Id)
		.subscribe(ret_value=> {this.user = ret_value;});
  }

}
