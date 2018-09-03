import { Component, OnInit } from '@angular/core';
import { Territory } from '../territory/territory.model';
import {TerritoryService} from '../territory.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  territories: Territory[];

  constructor(public territoryService:TerritoryService) {
  }

  ngOnInit() {
    this.territoryService.getTerritories().subscribe(territories=>this.territories=territories)
  }

  get_left_position(index: number):number{
    var nth = Math.floor(index/4)
    return 47.37*(3-index % 4 +nth)/3;
  }
  get_top_position(index: number):number{
    var nth = Math.floor(index/4);
    return 16.34*(index % 4 + nth);
  }
}
