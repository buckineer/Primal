import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification.model';
import { NotificationService } from '../notification.service';
import { Clan } from '../clan.model';
import { ClanService } from '../clan.service';

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
