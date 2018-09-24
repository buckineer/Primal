import { Component, OnInit } from '@angular/core';
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