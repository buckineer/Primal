import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Territory } from '../territory/territory.model';
import {TerritoryService} from '../territory.service';
import {GlobalState} from '../state';

@Component({
  selector: 'app-conquer',
  templateUrl: './conquer.component.html',
  styleUrls: ['./conquer.component.css']
})
export class ConquerComponent implements OnInit {

  territory:Territory;
	remain_days:number;
	
  constructor(private route: ActivatedRoute,
  			private territoryService: TerritoryService,
        private state:GlobalState,
  ) { }

  ngOnInit() {
  	this.getTerritory();
  	this.getLeftDay();
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

