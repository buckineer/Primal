import { Component, OnInit } from '@angular/core';
import { Info } from '../models/info.model';
import { CommonService } from '../services/common.service';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: Info[] = [];

  constructor(public commonService: CommonService) {

  }

  ngOnInit() {
    this.commonService.getInformation().subscribe(item => {
      this.info = item;
    });    
  }
  ngAfterViewInit()
  {
    Scroll.run_scroll();
  }
}
