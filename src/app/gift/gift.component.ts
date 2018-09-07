import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift.model';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  gift: Gift[];

  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getGift().subscribe(item=> this.gift = item);
  }
}