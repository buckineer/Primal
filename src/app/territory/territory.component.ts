import { Component, Input, OnInit } from '@angular/core';

import { Territory } from '../models/territory.model';
import {current_user_conquered_territory_id} from '../shared-dummy-mock'
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;
  @Input() state: boolean;
  is_conquering:boolean;
  environment = environment;
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
  	return this.territory.clan_color!=null;
  }

}
