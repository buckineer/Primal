import { Component, OnInit } from '@angular/core';

import {User} from '../user.model';
import {UserService} from '../user.service';

import {Territory} from '../territory/territory.model';
import {TerritoryService} from '../territory.service';

import {Clan} from '../clan.model';
import {ClanService} from '../clan.service';


import {GlobalState} from '../state';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  user:User;
  territories:Territory[];
  clan:Clan;


  constructor(private globalState:GlobalState,
  				private userService:UserService,
  				private territoryService:TerritoryService,
  				private clanService:ClanService,) { }

  ngOnInit() {
  	this.userService.getUser(this.globalState.Current_User_Id).
  								subscribe(ret_value=>
  									{	
  										this.user = ret_value;
  										this.getClanByUser(ret_value.joined_clan_id);
  									});
  	this.territoryService.getTerritoriesByUser(this.globalState.Current_User_Id)
  							.subscribe(ret_value=> this.territories = ret_value);
  }

  getClanByUser(clan_id:number){
  	this.clanService.getClan(clan_id).subscribe(ret_value=>this.clan = ret_value);
  }
}
