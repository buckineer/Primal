import { Component, OnInit, Inject,Input,Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Gift } from '../models/gift.model';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material';
import {GlobalState} from '../state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-check',
  templateUrl: './buy-check.component.html',
  styleUrls: ['./buy-check.component.css']
})
export class BuyCheckComponent implements OnInit {

  gift_name:string;
  // gift: Gift;
  @Input() gift: Gift;
  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter();

  // constructor(public commonService:CommonService, public dialog: MatDialog, private globalState:GlobalState, @Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<BuyCheckComponent>) { }
  constructor(public commonService:CommonService, public dialog: MatDialog, private globalState:GlobalState,private router:Router) { }

  ngOnInit() {
  	this.gift_name = this.gift['title'];    
  }
  close(){
  	
    this.onConfirm.emit(false);
  	// this.matDialogRef.close();
  }
  confirm(){
    this.onConfirm.emit(true);
  }
  openDialog(gift:Gift) {

    // this.matDialogRef.close();

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
