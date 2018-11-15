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
  current_user_id = this.state.Current_User_Id;
  // current_user_id = 3;
  current_clan_color: string;
  is_loaded:boolean;
  clan_is_loaded:boolean;
  clans_is_loaded: boolean;
  filtered:boolean;
  constructor(public clanService:ClanService, private state:GlobalState) {
    this.current_clan = new Clan;
  }

  ngAfterViewInit()
  {
    Scroll.run_scroll();
    this.filtered = true;
  }
 
  ngAfterViewChecked(){
    if(this.filtered==false){
      Scroll.run_scroll();
      this.filtered = true;
    }
  }
  ngOnInit() {
    
    this.is_loaded = false;
    this.clan_is_loaded = false;
    this.clanService.getClan(this.current_user_id).subscribe(item=>{
      this.current_clan = item;

      this.getCurrentCol();
      this.clan_is_loaded = true;
      this.is_loaded = this.clan_is_loaded && this.clans_is_loaded;
      this.filtered = !this.is_loaded;
    });

    this.clans_is_loaded = false;
  	this.clanService.getClans().subscribe(items=>{
      this.clans=items;
      this.clans.sort((a,b):number => {if(a.points>b.points) return -1; return 1;})
      this.clans_is_loaded = true;
      this.is_loaded = this.clan_is_loaded && this.clans_is_loaded;
      this.filtered = !this.is_loaded;
    });
    
  }

  getClanImg(item: string): string{
    var img = item;
    var imgUrl = img.replace("#","");
    return '/assets/images/clans/'+ imgUrl +'.png';
  }

  getCurrentCol(): void{
    var itemUrl = this.current_clan.clan_color;
    var imgUrl = itemUrl.replace("#", "");
    this.current_clan_color = '/assets/images/clans/'+ imgUrl +'.png';
    console.log(this.current_clan_color);
  }
}
