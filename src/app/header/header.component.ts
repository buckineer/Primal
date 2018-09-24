import { Component, OnInit } from '@angular/core';
import {EventSourcePolyfill} from 'ng-event-source';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  alarmCount:number;
  constructor(public notificationService: NotificationService) { 
  	
  }

  ngOnInit() {

  }

}
