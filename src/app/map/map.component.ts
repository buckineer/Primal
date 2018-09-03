import { Component, OnInit } from '@angular/core';
import { Territory } from '../territory/territory.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  territories: Territory[];

  constructor() {
    this.territories = [
      new Territory('Territory 1', '../assets/images/map/Territory 1.png', new Date(2018, 8, 11), false, false,),
      new Territory('Territory 2', '../assets/images/map/Territory 2.png', new Date(2018, 9, 20), false, false),
      new Territory('Territory 3', '../assets/images/map/Territory 3.png', new Date(2018, 8, 5), false, false),
      new Territory('Territory 4', '../assets/images/map/Territory 4.png', new Date(2018, 10, 13), false, false),
      new Territory('Territory 5', '../assets/images/map/Territory 5.png', new Date(2018, 6, 5), true, false),
      new Territory('Territory 6', '../assets/images/map/Territory 6.png', new Date(2018, 5, 18), true, false),
    ];
  }

  ngOnInit() {
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
