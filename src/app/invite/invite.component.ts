import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import {CommonService} from '../services/common.service';
import {GlobalState} from '../state';
@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  selectedUsers: any[];
  users:User[];
  environment = environment;
  constructor(private commonService:CommonService,
    public userService:UserService,
    public globalState:GlobalState,
    private router: Router) { 
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
  store(){
    this.commonService.sendInvite(this.selectedUsers).subscribe(resp=>{
      if(resp=="success")
        this.router.navigate(['map']);
    });
  }
  get_image_url(user:User){
    return this.userService.get_avatar_url(user);
  }
}
