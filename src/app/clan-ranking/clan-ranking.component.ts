import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Clan } from '../models/clan.model';
import {ClanService} from '../services/clan.service';
import {GlobalState} from '../state';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import { environment } from '../../environments/environment';
import * as Scroll from '../../assets/js/quasi/scroll.js';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-clan-ranking',
  templateUrl: './clan-ranking.component.html',
  styleUrls: ['./clan-ranking.component.css']
})
export class ClanRankingComponent implements OnInit {

  clans: Clan[];
  environment = environment;
  current_clan: Clan;
  user: User;
  current_user_id = this.state.Current_User_Id;
  // current_user_id = 3;
  current_clan_color: string;
  joined_clan_id: number;
  is_loaded:boolean;
  clan_is_loaded:boolean;
  clans_is_loaded: boolean;
  filtered:boolean;
  
  constructor(public clanService:ClanService, private state:GlobalState, private userService:UserService,) {
    this.current_clan = new Clan;
    this.user = new User;
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

    this.userService.getUser(this.state.Current_User_Id)
                      .subscribe(ret_value=>{this.user = ret_value;
                      this.joined_clan_id = this.get_joined_clan_id();

                      console.log("$$$$$$$$$$$$$$$$$$$$$$", this.user);
                      
                      this.is_loaded = false;
                      this.clan_is_loaded = false;
                      this.clanService.getClan(this.joined_clan_id).subscribe(item=>{
                      this.current_clan = item;

                      this.getCurrentCol();
                      this.clan_is_loaded = true;
                      this.is_loaded = this.clan_is_loaded && this.clans_is_loaded;
                      this.filtered = !this.is_loaded;
                    });
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

  is_joined():boolean{
  if(this.user){
    return  ((this.user.joined_clan!=-1 && this.user.joined_clan != null ) || (this.user.admin_clan!=-1 && this.user.admin_clan!=null));
    }
  return false;
  }

  get_joined_clan_id(): number {
    if (this.user.joined_clan!=-1 && this.user.joined_clan != null ){
      return this.user.joined_clan;
    }
    else if (this.user.admin_clan!=-1 && this.user.admin_clan!=null){
      return this.user.admin_clan;
    }
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

  getClanLink(item: number): string{
    return '/clan/' + item + '/';
  }
}
