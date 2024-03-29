import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';
import {CommonService} from '../services/common.service';
import {ClanService} from '../services/clan.service';
import {Clan} from '../models/clan.model';
import {GlobalState} from '../state';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';
import { environment } from '../../environments/environment';
import * as Scroll from '../../assets/js/quasi/scroll.js';
import { isNgTemplate } from '@angular/compiler';
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
  environment = environment;
  color = 'CE3535';
  avatar = '/images/clans/object1.png';
  current_clan_color: string;

  constructor(fb: FormBuilder,public commonService:CommonService,
              public clanService:ClanService,private state:GlobalState) {

  	this.myForm = fb.group({
  		'name': ['',Validators.required],
  		'description': ['',Validators.required],
  		'motto': ['',Validators.required],
  		'open':[false,Validators.required],
  		'color':['red',Validators.required],
		  'avatar':['/images/clans/object1.png',Validators.required]
  	})
    console.log(this.myForm);
  }

  ngAfterViewInit()
  {
    Scroll.run_scroll();
  }


  ngOnInit() {
    this.commonService.getColors().subscribe(ret_value=> this.colors = ret_value);
    this.commonService.getClanImages().subscribe(ret_value=> this.clan_images = ret_value);
    this.clan_added = false;
    console.log(this.clan_images)
  }
  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);           //{6}
      }
    });
  }


  onSubmit(form:any){
    console.log(this.myForm);
    if(this.myForm.valid){
      this.clan = new Clan(this.state.Current_User_Id,-1,form.name,5,0,form.avatar,form.color,
                [],0,null,form.description,form.motto);

      console.log(form.name);
      console.log(form.avatar);
      console.log(form.color);
      console.log(form.description);
      

      this.clanService.addClan(this.clan)
        .subscribe(ret_value=> {
          console.log("=addd clan",ret_value)
          this.clan = ret_value; 
          this.clan_added=false;
          if(ret_value.admin_user!=-1){
            this.clan_added=true;
            this.getCurrentCol();
          }
          console.log("00000000000000000000000",this.clan_added);
        });
    }else{
       this.validateAllFormFields(this.myForm);
    }

    
  }

  getBcolor(item: string): string{
      return '#' + item;
  }

  getBurl(item: string): string{
    return '/assets/images/clans/'+ item +'.png';
  }

  getCurrentCol(): void{
    var itemUrl = this.clan.clan_color;
    var imgUrl = itemUrl.replace("#", "");
    this.current_clan_color = '/assets/images/clans/'+ imgUrl +'.png';
    console.log(this.current_clan_color);
  }

  getClanLink(item: number): string{
    return '/clan/' + item + '/';
  }

}