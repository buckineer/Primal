import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import {GlobalState} from '../state';
import { environment } from '../../environments/environment';
// import { current_user } from '../shared-dummy-mock';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  
  user: User;
  user_image_url:string;
  environment = environment;
  
  constructor(public userService:UserService,public globalState:GlobalState) { }
  ngOnInit() {
  	this.user = new User()
	this.userService.getUser(this.globalState.Current_User_Id)
		.subscribe(ret_value=> {
      console.log(ret_value,"2222222222222222222222222222")
      this.globalState.current_user = ret_value;
      this.globalState.current_user.image_url = this.userService.get_avatar_url(ret_value);
      this.user = this.globalState.current_user;
      console.log(this.user);
     });
  }

}
