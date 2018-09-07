import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {UserAvatarSelectDialogBodyComponent} from '../user-avatar-select-dialog-body/user-avatar-select-dialog-body.component';
import { UserService } from '../services/user.service';
import {User} from '../models/user.model';
import {GlobalState} from '../state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  myForm: FormGroup;
  user: User;

  constructor(fb: FormBuilder,public userService:UserService,public globalState:GlobalState,public dialog: MatDialog,private router: Router) { 
  	this.myForm = fb.group({
  		'first_name': ['',Validators.required],
  		'last_name': ['',Validators.required],
  		'email': ['',Validators.required],
  		'phone':['',Validators.required],
  	})
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserAvatarSelectDialogBodyComponent, {
      height: '380px',
      minWidth:"800px",
      panelClass:'dialog',
      data:this.user.image_url
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.user.image_url = result;
      this.userService.putUser(this.user);

    });
  }
  ngOnInit() {
  	this.userService.getUser(this.globalState.Current_User_Id)
  									.subscribe(ret_value=> {this.user = ret_value;this.InitForm(ret_value)});
  }
  InitForm(user:User){
    this.myForm.setValue({'first_name':user.first_name,
                           'last_name':user.last_name,
                           'email':user.email,
                           'phone':user.phone
    })
  }
  onSubmit(form:any){
  	console.log("Submit");
    if(this.myForm.valid){
      this.user.first_name = form.first_name;
      this.user.last_name = form.last_name;
      this.user.email = form.email;
      this.user.phone = form.phone;
      this.userService.putUser(this.user);
      this.router.navigate(['/profile']);
    }
  }
}
