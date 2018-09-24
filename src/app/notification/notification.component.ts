import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  environment = environment
  notifications: Notification[];

  constructor(public notificationService: NotificationService,
              public clanService: ClanService) { }

  ngOnInit() {
    this.notificationService.getNotifications()
      .subscribe(items => {this.notifications = items; this.mark_as_read()}); 
  }
  mark_as_read(){
    if (this.notifications.length >0 ) {
      var data=[];
      for (var i = this.notifications.length - 1; i >= 0; i--) {
        data.push(this.notifications[i].id)
      }
      this.notificationService.markAsReadNotification(data)
        .subscribe()
    }
  }
}
