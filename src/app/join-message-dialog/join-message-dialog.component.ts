import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Notification } from '../models/notification.model';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-join-message-dialog',
  templateUrl: './join-message-dialog.component.html',
  styleUrls: ['./join-message-dialog.component.css']
})
export class JoinMessageDialogComponent implements OnInit {

  notification:Notification;
  environment = environment;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<JoinMessageDialogComponent>) { }

  ngOnInit() {
  	this.notification = this.data;
  }
  close(){
  	console.log("clicked ============")
  	this.matDialogRef.close();
  }
}
