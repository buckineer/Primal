import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';
import {GlobalState} from '../state';
import { TerritoryService } from '../services/territory.service';
import { Territory } from '../models/territory.model';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  user:User = new User;
  clan:Clan = new Clan;
  selected_clan: Clan = new Clan;
  joined_users: User[] = [];
  environment = environment
  admin_user:User = new User;
  current_mission = new Territory;
  current_clan_color: string;

  constructor(private route: ActivatedRoute,
    private clanService: ClanService, private userService: UserService,
    private missionService: TerritoryService,
    public globalState:GlobalState) { }

  ngOnInit() {
    this.getClan();
    this.get_current_mission();
    this.userService.getUser(this.globalState.Current_User_Id).
  								subscribe(ret_value=>
  									{	
  										this.user = ret_value;
                      // this.user_image_url = this.userService.get_avatar_url(this.user)
  										this.getClanByUser(ret_value);
  									});
  }
  ngAfterViewInit()
  {
    Scroll.run_scroll("#badge-content","#badge-list");
  }
  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.selected_clan = ret_item; this.getUsers();
    this.getCurrentCol();
    });
  }

  get_current_mission(): void {
    this.missionService.getCurrentMission().subscribe(ret_item=>{this.current_mission = ret_item;})
    console.log("Mission Details------------------------")
  }

  getUsers(): void {
    this.selected_clan.members.forEach(element => {
      this.userService.getUser(element).subscribe(item=>{this.add_user(item); console.log(item)})
    });
    this.userService.getUser(this.selected_clan.admin_user).subscribe(item=>{this.admin_user = item;})
  }

  add_user(item: any): void{
    this.joined_users.push(item);
  }
  is_admin_clan():boolean{
    return this.selected_clan.admin_user == this.globalState.Current_User_Id
  }
  get_user_image(user:User):string{
    return this.userService.get_avatar_url(user);
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

  getCurrentCol(): void{
    var itemUrl = this.selected_clan.clan_color;    
    var imgUrl = itemUrl.replace("#", "");
    this.current_clan_color = '/assets/images/clans/'+ imgUrl +'.png';
    console.log("$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(this.current_clan_color);
  }

  clan_to_change():boolean{
    return true;
    // var now = new Date();
    // var starting_date = new Date(this.current_mission.starting_date);
    
    // var timeDiff = Math.abs(now.getTime() - starting_date.getTime());
    // var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));    

    // if (dayDiff > 7 || dayDiff == NaN)
    // {
    //   return false;
    // }
    
    // if (dayDiff <= 7 && dayDiff != NaN)
    // {
    //   return true;
    // }
  }
}
