import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';
import {MatDialog} from '@angular/material';
import {JoinMessageDialogComponent} from '../join-message-dialog/join-message-dialog.component';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { UserService } from '../services/user.service';
import {GlobalState} from '../state';
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
              public clanService: ClanService,
              private userService: UserService,
              private globalState:GlobalState,
              public dialog: MatDialog) { }

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
  join(item:Notification){
    var clanId = item.clan_id;
    this.userService.JoinClanToUserFromNotification(this.globalState.Current_User_Id,clanId)
    .subscribe(resp=>{
      if(resp!="error"){
        const dialogRef = this.dialog.open(JoinMessageDialogComponent, {
          height: '380px',
          minWidth:"800px",
          panelClass:'select-avatar-dialog',
          data:item
        })
      }
    })
  }
}
