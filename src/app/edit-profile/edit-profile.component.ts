import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {UserAvatarSelectDialogBodyComponent} from '../user-avatar-select-dialog-body/user-avatar-select-dialog-body.component';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import {GlobalState} from '../state';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {environment} from '../../environments/environment';

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
  constructor(fb: FormBuilder,private authService: AuthService,public userService:UserService,public globalState:GlobalState,public dialog: MatDialog,private router: Router) { 
  	this.myForm = fb.group({
  		'first_name': ['',Validators.required],
  		'last_name': ['',Validators.required],
  		'email': ['',Validators.required],      
  		'phone':['',[Validators.required,Validators.pattern('^\\+?1?\\d{9,15}$')]],
  	})
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserAvatarSelectDialogBodyComponent, {
      height: '380px',
      minWidth:"800px",
      panelClass:'dialog',
      data:this.user.avatar
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.user.avatar_type = result;
      var data = {'avatar':result}

      this.userService.updateUser(this.user.id, data)
        .subscribe(resp=>{
          if(resp=="success")
            this.globalState.current_user.avatar_type = this.user.avatar_type;
            this.globalState.current_user.avatar = "/images/avatars Final/"+this.user.avatar_type+AVATAR_IMAGE_NAMES[this.user.level]+".png";
            this.user.avatar = this.globalState.current_user.avatar;
        });

    });
  }
  logout(){
    this.authService.logout();
  }
  ngOnInit() {
  	this.userService.getUser(this.globalState.Current_User_Id)
  									.subscribe(ret_value=> {this.user = ret_value;this.InitForm(ret_value)});
  }
  InitForm(user:User){
    console.log("Init form ",user)
    this.myForm.setValue({'first_name':user.first_name,
                           'last_name':user.last_name,
                           'email':user.email,
                           'phone':user.phone_number
    })
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
    }
  }
}
