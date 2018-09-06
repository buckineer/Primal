import { Component, OnInit,Inject } from '@angular/core';
import {CommonService} from '../common.service';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-user-avatar-select-dialog-body',
  templateUrl: './user-avatar-select-dialog-body.component.html',
  styleUrls: ['./user-avatar-select-dialog-body.component.css']
})
export class UserAvatarSelectDialogBodyComponent implements OnInit {
  avatars:string[];
  selected:string;
  constructor(private commonService:CommonService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
	console.log("==============")
	console.log(this.data)
	this.selected = this.data;
  	this.commonService.getAvatarImages().subscribe(ret_value=>this.avatars=ret_value);
  }
  set_selected(value:string){
  	console.log("selecdte=======",value);
  	this.selected = value;

  }
}
