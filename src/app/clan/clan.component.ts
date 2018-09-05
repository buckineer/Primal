import { Component, OnInit } from '@angular/core';
import { Clan } from '../clan.model';
import { ClanService } from '../clan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  selected_clan: Clan;

  constructor(private route: ActivatedRoute,
    private clanService: ClanService,) { }

  ngOnInit() {
    this.getClan();
  }

  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.selected_clan = ret_item; console.log(ret_item)});
  }

}
