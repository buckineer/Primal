import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {UserAvatarSelectDialogBodyComponent} from '../user-avatar-select-dialog-body/user-avatar-select-dialog-body.component';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import {GlobalState} from '../state';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {environment} from '../../environments/environment';
import {ClanService} from '../services/clan.service';
import {Clan} from '../models/clan.model';

var AVATAR_IMAGE_NAMES={
  1:'a Autralophitecus Head',
  2:'b Hábilis Head',
  3:'c Ergaster Head',
  4:'d Erectus Head',
  5:'e Antecessor Head',
  6:'f Heidelbergenis Head',
  7:'g Neanderthal Head',
  8:'h Sapiens Head',
};

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  myForm: FormGroup;
  user: User = new User;
  environment = environment
  user_image_url:string;
  clan:Clan = new Clan;
  constructor(fb: FormBuilder,private authService: AuthService,private clanService:ClanService, public userService:UserService,public globalState:GlobalState,public dialog: MatDialog,private router: Router) { 
  	this.myForm = fb.group({
  		'first_name': ['',Validators.required],
  		'last_name': ['',Validators.required],
  		'email': ['',Validators.required],      
  		'phone':['',[Validators.pattern('^\\+?1?\\d{9,15}$')]],
  	})
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserAvatarSelectDialogBodyComponent, {

      panelClass:'dialog',
      data:{'avatar':this.user.avatar,'level':this.user.level}
    });

    dialogRef.afterClosed().subscribe(result => {
      var data = {'avatar':result['avatar']}

      this.userService.updateUser(this.user.id, data)
        .subscribe(resp=>{
          if(resp=="success")
            this.globalState.current_user.avatar = data['avatar'];
            this.globalState.current_user.image_url = this.userService.get_avatar_url(this.globalState.current_user)
            this.user = this.globalState.current_user
            this.user_image_url = this.globalState.current_user.image_url
            
        });

    });
  }
  logout(){
    this.authService.logout();
  }
  ngOnInit() {
  	// this.userService.getUser(this.globalState.Current_User_Id)
  	// 								.subscribe(ret_value=> {this.user = ret_value;this.InitForm(ret_value)});
    this.userService.getUser(this.globalState.Current_User_Id)
                    .subscribe(ret_value=>
  									{	
  										this.user = ret_value;
                      this.user_image_url = this.userService.get_avatar_url(this.user)
  										this.getClanByUser(ret_value);
  									});
  }
  InitForm(user:User){
    console.log("Init form ",user)
    this.user_image_url = this.userService.get_avatar_url(user)
    this.myForm.setValue({'first_name':user.first_name,
                           'last_name':user.last_name,
                           'email':user.email,
                           'phone':user.phone_number
    })
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
  	console.log("Submit");
    console.log(this.myForm);
    if(this.myForm.valid){
      this.user.first_name = form.first_name;
      this.user.last_name = form.last_name;
      this.user.email = form.email;
      this.user.phone_number = form.phone;
      var data = {
        'first_name':form.first_name,
        'last_name': form.last_name,
        'email': form.email,
        'phone_number':form.phone
      }
      this.userService.updateUser(this.user.id, data)
        .subscribe( resp=>{
          if(resp=="success")
            this.globalState.current_user.first_name = this.user.first_name
            this.globalState.current_user.last_name = this.user.last_name
            this.globalState.current_user.email = this.user.email
            this.globalState.current_user.phone_number = this.user.phone_number
            this.router.navigate(['/profile']);
        });
    }else{
      this.validateAllFormFields(this.myForm);
    }
  }

  getClanByUser(user:User){
    var clan_id = -1;
    if(user.admin_clan!= -1 && user.admin_clan!=null)
      clan_id = user.admin_clan
    else 
      clan_id = user.joined_clan
    if(clan_id != -1 && clan_id!=null){
      this.clanService.getClan(clan_id).subscribe(ret_value=>this.clan = ret_value);  
    }else{
      this.clan = new Clan;
    } 	
  }
}
