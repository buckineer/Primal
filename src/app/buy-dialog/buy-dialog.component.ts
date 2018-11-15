import { Component, OnInit,Inject,Input,Output,EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Gift } from '../models/gift.model';
@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {

  gift_name:string;
  @Input() gift: Gift;
  @Output() onConfirm: EventEmitter<String> = new EventEmitter();
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any,public matDialogRef: MatDialogRef<BuyDialogComponent>) { }
  constructor() { }
  ngOnInit() {
  	// this.gift_name = this.data;
  }
  close(){
  	console.log("clicked ============")
  	// this.matDialogRef.close();
  }
  view_detail(){
    this.onConfirm.emit("DETAIL");
  }
  view_list(){
    this.onConfirm.emit("LIST");
  }
}
