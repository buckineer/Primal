import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[];

  constructor(public notificationService: NotificationService,
              public clanService: ClanService) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(items => this.notifications = items); 
  }

}
