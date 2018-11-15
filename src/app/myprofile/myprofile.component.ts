import { Component, OnInit } from '@angular/core';

import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

import {Territory} from '../models/territory.model';
import {TerritoryService} from '../services/territory.service';

import {Clan} from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import {environment} from '../../environments/environment';

import {GlobalState} from '../state';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  user:User = new User;
  territories:Territory[];
  clan:Clan = new Clan;
  environment = environment
  user_image_url:string;
  is_loaded:boolean;
  constructor(private globalState:GlobalState,
  				private userService:UserService,
  				private territoryService:TerritoryService,
  				private clanService:ClanService,) { }
  ngAfterViewInit()
  {
    Scroll.run_scroll("#badge-content","#badge-list");
    this.is_loaded = false;
  }
  ngOnInit() {
  	this.userService.getUser(this.globalState.Current_User_Id).
  								subscribe(ret_value=>
  									{	
  										this.user = ret_value;
                      this.user_image_url = this.userService.get_avatar_url(this.user)
  										this.getClanByUser(ret_value);
  									});
  }

  getClanByUser(user:User){
    var clan_id = -1;
    if(user.admin_clan!= -1 && user.admin_clan!=null)
      clan_id = user.admin_clan
    else 
      clan_id = user.joined_clan
    if(clan_id != -1 && clan_id!=null){
      this.clanService.getClan(clan_id).subscribe(ret_value=>{this.clan = ret_value;this.is_loaded=true;});  
    }else{
      this.clan = new Clan;
      this.is_loaded=true;
    } 	
  }
}
