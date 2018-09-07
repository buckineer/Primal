import { Component, OnInit } from '@angular/core';
import { Info } from '../info.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: Info[];

  constructor(public commonService: CommonService) {

  }

  ngOnInit() {
    this.commonService.getInfo().subscribe(item=> this.info = item);
  }

}
