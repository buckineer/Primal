import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  
  users:User[];

  constructor(public userService:UserService) { }

  ngOnInit() {
  	this.userService.getUsers().subscribe(items=>{this.users=items;this.sort_user_by_point();});
  }

  sort_user_by_point(){
  	this.users.sort((a,b):number => {if(a.points>b.points) {return -1;} return 1;})
  }
}
