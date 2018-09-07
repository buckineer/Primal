import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';
import {CommonService} from '../services/common.service';
import {ClanService} from '../services/clan.service';
import {Clan} from '../models/clan.model';
import {GlobalState} from '../state';
@Component({
  selector: 'app-clan-create',
  templateUrl: './clan-create.component.html',
  styleUrls: ['./clan-create.component.css']
})
export class ClanCreateComponent implements OnInit {

  myForm: FormGroup;
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
  }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  onSubmit(form:any){
    console.log(this.myForm);
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
                                description:form.description,                                
                                motto:form.motto,
                                }).subscribe(ret_value=> {this.clan = ret_value; this.clan_added=true;});

    }else{
       this.validateAllFormFields(this.myForm);
    }
  }
}
