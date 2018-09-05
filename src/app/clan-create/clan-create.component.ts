import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {CommonService} from '../common.service';
import {ClanService} from '../clan.service';
import {Clan} from '../clan.model';
import {GlobalState} from '../state';
@Component({
  selector: 'app-clan-create',
  templateUrl: './clan-create.component.html',
  styleUrls: ['./clan-create.component.css']
})
export class ClanCreateComponent implements OnInit {

  myForm: FormGroup;
  user_id: AbstractControl;
  password: AbstractControl;
  colors: string[];
  clan_images:string[];
  clan_added:boolean;
  clan:Clan;
  constructor(fb: FormBuilder,public commonService:CommonService,
              public clanService:ClanService,private state:GlobalState) {

  	this.myForm = fb.group({
  		'name': ['',Validators.required],
  		'description': ['',Validators.required],
  		'motto': ['',Validators.required],
  		'open':[false,Validators.required],
  		'color':['red',Validators.required],
		  'avatar':['/assets/images/clans/object1.png',Validators.required]
  	})
    console.log(this.myForm);    
  }

  ngOnInit() {
    this.commonService.getColors().subscribe(ret_value=> this.colors = ret_value);
    this.commonService.getClanImages().subscribe(ret_value=> this.clan_images = ret_value);
    this.clan_added = false;
    console.log("on init =====================")
    console.log(this.myForm);
  }
  onSubmit(form:any){
    if(this.myForm.valid){

      this.clanService.addClan({id:-1,
                                clan_name:form.name,
                                max_members:5,
                                joined_members:0,
                                image_url:form.avatar,
                                clan_color:form.color,
                                members:[],
                                points:1000,
                                territory_info:null,
                                }).subscribe(ret_value=> this.clan = ret_value; this.clan_added=true;);

    }
  }
}
