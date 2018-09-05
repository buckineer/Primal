import { Component, OnInit } from '@angular/core';
import { Clan } from '../clan.model';
import {ClanService} from '../clan.service';
@Component({
  selector: 'app-clan-home',
  templateUrl: './clan-home.component.html',
  styleUrls: ['./clan-home.component.css']
})
export class ClanHomeComponent implements OnInit {
  clans: Clan[];

  constructor(public clanService:ClanService) { }

  ngOnInit() {
  	this.clanService.getClans().subscribe(items=>this.clans=items)
  }

}
