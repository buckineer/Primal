import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';

import { GlobalState } from '../state';
@Component({
  selector: 'app-clan-home',
  templateUrl: './clan-home.component.html',
  styleUrls: ['./clan-home.component.css']
})
export class ClanHomeComponent implements OnInit {
  clans: Clan[];
  environment = environment;
  user:User;
  constructor(public clanService:ClanService,public userService:UserService,public globalState:GlobalState) { }

  ngOnInit() {
    this.clanService.getClans().subscribe(items=>this.clans=items)
    this.userService.getUser(this.globalState.Current_User_Id)
    .subscribe(ret_value=> {this.user = ret_value;});
  }
}
