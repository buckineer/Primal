import { Component, OnInit,Inject } from '@angular/core';
import {CommonService} from '../services/common.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-user-avatar-select-dialog-body',
  templateUrl: './user-avatar-select-dialog-body.component.html',
  styleUrls: ['./user-avatar-select-dialog-body.component.css']
})
export class UserAvatarSelectDialogBodyComponent implements OnInit {
  avatars:string[];
  selected:{};
  environment = environment
  constructor(private commonService:CommonService,@Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<UserAvatarSelectDialogBodyComponent>) { 
    matDialogRef.disableClose = true;//disable default close operation
    matDialogRef.backdropClick().subscribe(result => {
      matDialogRef.close(this.selected);
    });
  }

  ngOnInit() {
	  this.selected = this.data;
  	this.commonService.getAvatarImages().subscribe(ret_value=>this.avatars=ret_value);
  }
  set_selected(item:any){
  	this.selected['avatar'] = item.value;
  }
  close(){
    this.matDialogRef.close(this.selected);
  }
}
