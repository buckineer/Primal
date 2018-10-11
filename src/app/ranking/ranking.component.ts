import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserService} from '../services/user.service';
import {GlobalState} from '../state';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  
  users:User[];
  current_user_id:Number;
  environment = environment
  constructor(public userService:UserService,private globalState:GlobalState) { }

  ngOnInit() {
    this.current_user_id = this.globalState.Current_User_Id;
  	this.userService.getUsers().subscribe(items=>{this.users=items;this.sort_user_by_point();});
  }

  sort_user_by_point(){
  	this.users.sort((a,b):number => {if(a.points>b.points) {return -1;} if(a.points==b.points&&a.id<b.id)return -1; return 1;})
    var index = this.users.findIndex(user=>{return user.id === this.globalState.Current_User_Id})
    // if(index >5)
    //   this.users[4] = this.users[index];
    // this.users = this.users.slice(0,5);
  }
  get_image_url(user:User){
    return this.userService.get_avatar_url(user);
  }
}
