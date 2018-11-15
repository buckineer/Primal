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
  avatar_title: string;
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

  getAvatarTitle(): string {
    var avatar = this.territory.image_url;

    var res = avatar.split("/");
    
    var image_title = res[3];
    
    var ava_title = image_title.replace(".png", "");
    
    this.avatar_title = ava_title;
    return this.avatar_title;
  }

}
