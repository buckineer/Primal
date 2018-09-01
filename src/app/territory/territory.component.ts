import { Component, Input, OnInit } from '@angular/core';

import { Territory } from './territory.model';

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  @Input() territory: Territory;

  constructor() {
  }

  ngOnInit() {
  }
  
}
