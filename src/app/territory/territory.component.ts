import { Component, Input, OnInit } from '@angular/core';

import { Territory } from './territory.model';
import {current_user_conquered_territory_id} from '../shared-dummy-mock'
@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;
  @Input() state: boolean;
  is_conquering:boolean;
  constructor() {
  	this.is_conquering = false;
    this.state = false;
  }

  ngOnInit() {
  	if(current_user_conquered_territory_id ==this.territory.id){
  		this.is_conquering = true;
  	}
  }
  is_clan_exists():boolean{
  	return this.territory.clan_info!=null;
  }
}
