import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Territory } from '../models/territory.model';
import {TerritoryService} from '../services/territory.service';
import {GlobalState} from '../state';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-conquer',
  templateUrl: './conquer.component.html',
  styleUrls: ['./conquer.component.css']
})
export class ConquerComponent implements OnInit {

  territory:Territory;
  remain_days:number;
  starting_days: number;
	user:User;
  avatar_title: string;
  constructor(private route: ActivatedRoute,
  			private territoryService: TerritoryService,
        private state:GlobalState,
        private userService:UserService,
  ) { 
    this.territory = new Territory;
    this.user = new User;
  }

  ngOnInit() {
  	this.getTerritory();
    this.userService.getUser(this.state.Current_User_Id)
                      .subscribe(ret_value=>{this.user = ret_value;});
	}
	ngAfterViewInit()
  {
    Scroll.run_scroll()
  }
  getTerritory():void {
  	const id:number = +this.route.snapshot.paramMap.get('id');
  	this.territoryService.getTerritory(id)
		.subscribe(ret_item=>{this.territory=ret_item;
                          this.state.Current_Territory_Id = ret_item.id; this.getLeftDay(); this.getAvatarTitle();
    });
	}
	
  getLeftDay():void {
    console.log(this.territory)
  	var now = new Date();
  	var end = new Date(this.territory.ending_date);  	
  	console.log("=========");
  	console.log(now);
  	console.log(end);
  	console.log(end>now);
  	var timeDiff = Math.abs(end.getTime() - now.getTime());
  	var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.remain_days = dayDifference;
    console.log("remain days",this.remain_days)
  }

  getAvatarTitle(): void {
    var avatar = this.territory.image_url;
  
    var res = avatar.split("/");
    
    var image_title = res[3];
    
    var ava_title = image_title.replace(".png", "");
    console.log(ava_title);
    this.avatar_title = ava_title;
  }

  is_joined():boolean{
    if(this.user){
      return  ((this.user.joined_clan!=-1 && this.user.joined_clan != null ) || (this.user.admin_clan!=-1 && this.user.admin_clan!=null));
    }
    return false;
  }

  clan_to_change():boolean{
    var now = new Date();
    var starting_date = new Date(this.territory.starting_date);
    
    var timeDiff = Math.abs(now.getTime() - starting_date.getTime());

    var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    this.starting_days = 8 - dayDiff;

    if (dayDiff > 7 )
    {
      return false;
    }
    else {
      return true;
    }
  }
}

