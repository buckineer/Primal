import { Component, OnInit } from '@angular/core';
import { Territory } from '../models/territory.model';
import {TerritoryService} from '../services/territory.service';
import {GlobalState} from '../state';
import {current_user_conquered_territory_id} from '../shared-dummy-mock'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  territories: Territory[];
  is_conquering_id: number;

  constructor(public territoryService:TerritoryService,private state:GlobalState) {

  }

  ngOnInit() {
    this.territoryService.getTerritories().subscribe(territories=>this.territories=territories)
    this.state.Current_Territory_Id = -1;
    this.is_conquering_id = current_user_conquered_territory_id;
  }

  get_left_position(index: number):number{
    var nth = Math.floor(index/4)
    return 47.37*(3-index % 4 +nth)/3;
  }
  get_top_position(index: number):number{
    var nth = Math.floor(index/4);
    // return 16.34*(index % 4 + nth);
    return 17 * (index % 4 + nth)
  }
}
