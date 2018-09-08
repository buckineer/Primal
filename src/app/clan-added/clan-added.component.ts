import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import {GlobalState} from '../state';
@Component({
  selector: 'app-clan-added',
  templateUrl: './clan-added.component.html',
  styleUrls: ['./clan-added.component.css']
})
export class ClanAddedComponent implements OnInit {
  
  clan:Clan;

  constructor(private route: ActivatedRoute,
    private clanService: ClanService, private userService: UserService,private globalState:GlobalState) { }

  ngOnInit() {
  	this.getClan();
  	this.JoinClanToCurrentUser();
  }
  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.clan = ret_item; console.log(ret_item)});
  }
  JoinClanToCurrentUser(){
  	const id:number = +this.route.snapshot.paramMap.get('id');
  	this.userService.JoinClanToUser(this.globalState.Current_User_Id,id);
  }

}
