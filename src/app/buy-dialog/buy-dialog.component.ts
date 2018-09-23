import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {

  gift_name:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<BuyDialogComponent>) { }

  ngOnInit() {
  	this.gift_name = this.data;
  }
  close(){
  	console.log("clicked ============")
  	this.matDialogRef.close();
  }
}
