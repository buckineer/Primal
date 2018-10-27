import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GisComponent implements OnInit {
  
  alarmCount:number;
  constructor(public notificationService: NotificationService,private router: Router, private authService: AuthService) { this.alarmCount = 0;}

  logout(){    
    this.authService.logout();
  }
  ngOnInit() {
  	this.notificationService.getNotificationStream()
    	.subscribe(resp=>{
    		this.alarmCount = resp;
    	});
  }
  
}
