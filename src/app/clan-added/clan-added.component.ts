import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import {GlobalState} from '../state';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-clan-added',
  templateUrl: './clan-added.component.html',
  styleUrls: ['./clan-added.component.css']
})
export class ClanAddedComponent implements OnInit {
  
  clan:Clan;
  environment = environment;
  current_clan_color: string;

  constructor(private route: ActivatedRoute,
    private clanService: ClanService, private userService: UserService,public globalState:GlobalState) { 
    this.clan = new Clan()
  }

  ngOnInit() {
  	this.getClan();
  	this.JoinClanToCurrentUser();
  }
  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.clan = ret_item;
    this.getCurrentCol();});
  }
  JoinClanToCurrentUser(){
  	const id:number = +this.route.snapshot.paramMap.get('id');
  	this.userService.JoinClanToUser(this.globalState.Current_User_Id,id);
  }

  getCurrentCol(): void{
    var itemUrl = this.clan.clan_color;
    var imgUrl = itemUrl.replace("#", "");
    this.current_clan_color = '/assets/images/clans/'+ imgUrl +'.png';
    console.log(this.current_clan_color);
  }

  getClanLink(item: number): string{
    return '/clan/' + item + '/';
  }

}
