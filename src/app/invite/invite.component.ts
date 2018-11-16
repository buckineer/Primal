import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import { Clan } from '../models/clan.model';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import {CommonService} from '../services/common.service';
import { ClanService } from '../services/clan.service';
import {GlobalState} from '../state';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  selectedUsers: any[];
  users:User[];
  environment = environment;
  clan_id:number;
  

  constructor(private commonService:CommonService,
    public userService:UserService,
    public globalState:GlobalState,
    private clanService: ClanService,
    private router: Router) { 
  	this.selectedUsers=[];
  }

  ngOnInit() {
  	this.userService.getUsers().subscribe(ret_value => {
      this.users= ret_value;
      console.log("************* Checking users");
      console.log(this.users);
      });
    this.userService.getUser(this.globalState['Current_User_Id']).subscribe(ret => {
      this.clan_id = ret.admin_clan;
      console.log("%%%%%%%%%%%%% clan_id ");
      console.log(this.clan_id);
    })
    
  }
  ngAfterViewInit()
  {
       setTimeout( ()=>{
   Scroll.run_scroll();
   }, 500)
    
  }
  selectAll(event){
    console.log("111111111111111111111111111111111");
    console.log(event.target.checked);
  	if(event.target.checked){
  		this.selectedUsers=this.users.slice(0,5).map(item => String(item['id']))
  	}else{
  		this.selectedUsers=[];
  	}
    console.log(this.selectedUsers);
  }
  store(){
    this.commonService.sendInvite(this.selectedUsers).subscribe(resp=>{
      if(resp=="success")
        this.router.navigate(['/clan/'+this.clan_id]);
    });
  }
  get_image_url(user:User){
    return this.userService.get_avatar_url(user);
  }

  getClanColor(user: User){
    var user_clan_id: number;
    var user_clan = new Clan;
    var itemUrl;
    var imgUrl;

    if (user.joined_clan!=-1 && user.joined_clan != null ){
      user_clan_id = user.joined_clan;
    }
    else if (user.admin_clan!=-1 && user.admin_clan!=null){
      user_clan_id = user.admin_clan;
    }

    this.clanService.getClan(user_clan_id).subscribe(item=>{
      user_clan = item;
      itemUrl = user_clan.clan_color;
      imgUrl = itemUrl.replace("#", "");
      return '/assets/images/clans/'+ imgUrl +'.png';
      
    });
    
  }
}
