import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  selectedUsers: any[];
  users:User[];
  constructor(public userService:UserService) { 
  	this.selectedUsers=[];
  }

  ngOnInit() {
  	this.userService.getUsers().subscribe(ret_value => this.users= ret_value);
  }
  selectAll(event){
  	if(event.checked){
  		this.selectedUsers=this.users.slice(0,5).map(item => String(item['id']))
  	}else{
  		this.selectedUsers=[];
  	}
  	
  }
}
