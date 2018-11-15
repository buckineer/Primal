import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Clan } from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import {GlobalState} from '../state';
import { environment } from '../../environments/environment';
import * as Scroll from '../../assets/js/quasi/scroll.js';

@Component({
  selector: 'app-clan-ranking',
  templateUrl: './clan-ranking.component.html',
  styleUrls: ['./clan-ranking.component.css']
})
export class ClanRankingComponent implements OnInit {

  clans: Clan[];
  environment = environment;
  current_clan: Clan;

  constructor(public clanService:ClanService, private state:GlobalState) { }

  ngAfterViewInit()
  {
    Scroll.run_scroll();
  }

  ngOnInit() {
  	this.clanService.getClans()
  						.subscribe(items=>{
  											this.clans=items;
  											this.clans.sort((a,b):number => {if(a.points>b.points) return -1; return 1;})
  										});
    this.clanService.getClan(this.state.Current_User_Id).subscribe(item=>{
      this.current_clan = item;
    });
  }

  getClanImg(item: string): string{
    var imgUrl = item.replace("#",'');
    return '/assets/images/clans/'+ imgUrl +'.png';
  }
}
