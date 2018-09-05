import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {UserService} from '../user.service';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
