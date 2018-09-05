import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {UserService} from '../user.service';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  
  users:User[];

  constructor(public userService:UserService) { }

  ngOnInit() {
  	this.userService.getUsers().subscribe(items=>this.users=items)
  }

}
