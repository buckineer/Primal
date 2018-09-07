import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Territory } from '../models/territory.model';
import {TerritoryService} from '../services/territory.service';
import {GlobalState} from '../state';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-conquer',
  templateUrl: './conquer.component.html',
  styleUrls: ['./conquer.component.css']
})
export class ConquerComponent implements OnInit {

  territory:Territory;
	remain_days:number;
	user:User;

  constructor(private route: ActivatedRoute,
  			private territoryService: TerritoryService,
        private state:GlobalState,
        private userService:UserService,
  ) { }

  ngOnInit() {
  	this.getTerritory();
  	this.getLeftDay();
    this.userService.getUser(this.state.Current_User_Id)
                      .subscribe(ret_value=>{this.user = ret_value;console.log(ret_value)});
	}
	
  getTerritory():void {
  	const id:number = +this.route.snapshot.paramMap.get('id');
  	this.territoryService.getTerritory(id)
		.subscribe(ret_item=>{this.territory=ret_item;
                          this.state.Current_Territory_Id = ret_item.id;
    });
	}
	
  getLeftDay():void {
  	var now = new Date();
  	var start = new Date();
  	start.setDate(1);
  	console.log("=========");
  	console.log(now);
  	console.log(start);
  	console.log(start>now);
  	var timeDiff = Math.abs(now.getTime() - start.getTime());
  	var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.remain_days = dayDifference;
  }
}

