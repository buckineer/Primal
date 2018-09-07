import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {

  gift_name:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	this.gift_name = this.data;
  }
}
