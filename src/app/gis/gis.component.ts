import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GisComponent implements OnInit {
  
  alarmCount:number;
  constructor(public notificationService: NotificationService) { this.alarmCount = 0;}

  ngOnInit() {
  	// this.notificationService.getNotificationStream()
   //  	.subscribe(resp=>{
   //  		this.alarmCount = resp;
   //  	});
  }
}
