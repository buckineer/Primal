import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';
import {CommonService} from '../services/common.service';
import {ClanService} from '../services/clan.service';
import {Clan} from '../models/clan.model';
import {GlobalState} from '../state';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';

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
  current_user:User;
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
      this.clan = new Clan(this.state.Current_User_Id,-1,form.name,5,0,form.avatar,form.color,
                [],1000,null,form.description,form.notto);
      this.clanService.addClan(this.clan).subscribe(ret_value=> {this.clan = ret_value; this.clan_added=true;});

    }else{
       this.validateAllFormFields(this.myForm);
    }
  }
}
