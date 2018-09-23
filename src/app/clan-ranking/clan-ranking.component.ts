import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-clan-ranking',
  templateUrl: './clan-ranking.component.html',
  styleUrls: ['./clan-ranking.component.css']
})
export class ClanRankingComponent implements OnInit {

  clans: Clan[];
  environment = environment

  constructor(public clanService:ClanService) { }

  ngOnInit() {
  	this.clanService.getClans()
  						.subscribe(items=>{
  											this.clans=items;
  											this.clans.sort((a,b):number => {if(a.points>b.points) return -1; return 1;})
  										})
  }

}
