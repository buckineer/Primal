import { Component, OnInit } from '@angular/core';

import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

import {Territory} from '../models/territory.model';
import {TerritoryService} from '../services/territory.service';

import {Clan} from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import {environment} from '../../environments/environment';

import {GlobalState} from '../state';
import { CommonService } from '../services/common.service';
import { GiftTrack } from '../models/gifttrack.model';
import { Gift } from '../models/gift.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-user-gift',
  templateUrl: './user-gift.component.html',
  styleUrls: ['./user-gift.component.css']
})
export class UserGiftComponent implements OnInit {

  user:User = new User;
  territories:Territory[];
  clan:Clan = new Clan;
  environment = environment
  user_image_url:string;
  gifttrack: GiftTrack[] = [];
  gifts: Gift[]=[];
  total_gift: number;
  total_spent: number = 0;
  
  constructor(private globalState:GlobalState,
  				private userService:UserService,
  				private territoryService:TerritoryService,
  				private clanService:ClanService,
          private commonService: CommonService,) { }

  ngOnInit() {
    this.userService.getUser(this.globalState.Current_User_Id).
  								subscribe(ret_value=>
  									{	
  										this.user = ret_value;
                      this.user_image_url = this.userService.get_avatar_url(this.user)
  										this.getClanByUser(ret_value);
  									});
    this.commonService.getGiftsByUser().subscribe(ret=>
                  {
                    var sum = 0;
                    this.gifttrack = ret;
                    console.log("23193-10293-01293-01923-091230-")
                    console.log(this.gifttrack);
                    this.total_gift = this.gifttrack.length;
                    this.gifttrack.forEach(function (value){
                      console.log("4444444444444444444444444")
                      console.log(value.gift.points);
                      sum += value.gift.points;
                    });                 
                    this.total_spent = sum;
                    
                  });
  }

  getClanByUser(user:User){
    var clan_id = -1;
    if(user.admin_clan!= -1 && user.admin_clan!=null)
      clan_id = user.admin_clan
    else 
      clan_id = user.joined_clan
    if(clan_id != -1 && clan_id!=null){
      this.clanService.getClan(clan_id).subscribe(ret_value=>this.clan = ret_value);  
    }else{
      this.clan = new Clan;
    } 	
  }

  getItemUrl(resUrl: string){
    var ret = resUrl.replace('/media','');
    return ret;
  }

}
