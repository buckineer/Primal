import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Gift } from '../models/gift.model';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material';
import {GlobalState} from '../state';

@Component({
  selector: 'app-buy-check',
  templateUrl: './buy-check.component.html',
  styleUrls: ['./buy-check.component.css']
})
export class BuyCheckComponent implements OnInit {

  gift_name:string;
  gift: Gift;

  constructor(public commonService:CommonService, public dialog: MatDialog, private globalState:GlobalState, @Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<BuyCheckComponent>) { }

  ngOnInit() {
  	this.gift_name = this.data['title'];
    this.gift = this.data;
  }
  close(){
  	console.log("clicked ============")
  	this.matDialogRef.close();
  }

  openDialog(gift:Gift) {

    this.matDialogRef.close();

    this.commonService.buyGifts(gift['id']).subscribe(resp=>{
      if(resp=="success")
      {
        this.globalState.current_user.coins -= gift.points;
        // gift.state = "already bought";
        const dialogRef = this.dialog.open(BuyDialogComponent, {
          panelClass:'select-avatar-dialog',
          data:gift['title']
        });
      }
    });
  }

}
