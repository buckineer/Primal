import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift.model';
import { CommonService } from '../common.service';
import {MatDialog} from '@angular/material';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  gift: Gift[];

  constructor(public commonService: CommonService,public dialog: MatDialog) { }

  ngOnInit() {
    this.commonService.getGift().subscribe(item=> this.gift = item);
  }
  openDialog(data) {
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      height: '380px',
      minWidth:"800px",
      panelClass:'select-avatar-dialog',
      data:data
    });
  }
}