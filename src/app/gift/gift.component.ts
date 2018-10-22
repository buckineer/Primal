import { Component, OnInit } from '@angular/core';
import { Gift } from '../models/gift.model';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import {GlobalState} from '../state';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  gifts: Gift[];
  environment = environment;
  constructor(public commonService: CommonService, public dialog: MatDialog, private globalState:GlobalState) { }

  ngOnInit() {
    this.commonService.getGifts().subscribe(item=> this.gifts = item);
  }
  openDialog(gift:Gift) {

    this.commonService.buyGifts(gift['id']).subscribe(resp=>{
      if(resp=="success")
      {
        this.globalState.current_user.coins -= gift.points;
        gift.state = "already bought";
        const dialogRef = this.dialog.open(BuyDialogComponent, {
          panelClass:'select-avatar-dialog',
          data:gift['title']
        });
      }
    });
  }
}