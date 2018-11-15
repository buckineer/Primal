import { Component, OnInit,AfterViewChecked ,AfterViewInit } from '@angular/core';
import { Gift } from '../models/gift.model';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material';
import {BuyDialogComponent} from '../buy-dialog/buy-dialog.component';
import {GlobalState} from '../state';
import { environment } from '../../environments/environment';
import { BuyCheckComponent } from '../buy-check/buy-check.component';
import * as Scroll from '../../assets/js/quasi/scroll.js';
@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit,AfterViewChecked,AfterViewInit  {

  gifts: Gift[];
  environment = environment;
  state:String; // LIST:list_gifts, CHECK_PURCHASE,SUCCESS_PURCHASE,DETAIL
  selected_gift:Gift;
  filtered:boolean;
  constructor(public commonService: CommonService, public dialog: MatDialog, private globalState:GlobalState) { }

  ngOnInit() {
    this.commonService.getGifts().subscribe(item=> this.gifts = item);
    this.state = "LIST";
    this.filtered = false;
  }
  ngAfterViewInit()
  {
    Scroll.run_scroll();
    this.filtered = true;
  }
  ngAfterViewChecked(){
    if(this.filtered==false){
      Scroll.run_scroll();
      this.filtered = true;
    }
  }
  getItemUrl(resUrl: string){
    var ret = resUrl.replace('/media','');
    return ret;
  }
  on_set_show_category(string:String){
    this.state = string;
    if(this.state=="LIST"){
      this.filtered = false;
    }
  }
  on_purchase_determined(bought:boolean){
    if(bought == true){
      this.buyGift(this.selected_gift);
      // this.selected_gift['state']='already bought';  
      // this.state = "SUCCESS_PURCHASE";
    }else{
      this.filtered = false;
      this.state = "LIST";
    }

  }
  openCheckDialog(gift:Gift) {
    this.selected_gift = gift;
    this.state = "CHECK_PURCHASE";
    // const dialogRef = this.dialog.open(BuyCheckComponent, {
    //   panelClass: 'gift-check-dialog',
    //   data:gift
    // })
  }

  // openDialog(gift:Gift) {

  //   this.commonService.buyGifts(gift['id']).subscribe(resp=>{
  //     if(resp=="success")
  //     {
  //       this.globalState.current_user.coins -= gift.points;
  //       // gift.state = "already bought";
  //       const dialogRef = this.dialog.open(BuyDialogComponent, {
  //         panelClass:'select-avatar-dialog',
  //         data:gift['title']
  //       });
  //     }
  //   });
  // }
  buyGift(gift:Gift) {

    this.commonService.buyGifts(gift['id']).subscribe(resp=>{
      if(resp=="success")
      {
        this.globalState.current_user.coins -= gift.points;
        gift['state']='already bought';
        this.state = "SUCCESS_PURCHASE";
      }else{
        this.filtered= false;
        this.state="LIST";
      }
    });
  }
}