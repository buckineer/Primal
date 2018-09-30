import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  message: string;
  myForm: FormGroup;
  email: AbstractControl;
  is_reset_done: boolean;
  new_pwd:string
  constructor(public fb: FormBuilder,public authService: AuthService,private router: Router) { 
	this.myForm = fb.group({
    	'email': ['', [Validators.required,Validators.email]],
	});
  }
  ngOnInit() {
  	this.is_reset_done = false;
  	this.new_pwd = "";
  }
  onSubmit(form: any): void {
    if(this.myForm.valid){
    	this.authService.reset_password(form.email)
    		.subscribe(resp=>{
    			if(resp['type']=="error"){
    				this.message = resp['message'];
    			}else if(resp['type']=="success"){
    				this.new_pwd = resp['password'];
            this.is_reset_done = true;
    			}
    		});
    	console.log('you submitted value', form);
    }else{
  		if (this.myForm.controls['email'].errors.required){
  			this.message="required";
  		}else if(this.myForm.controls['email'].errors.email){
  			this.message="Insert Correct Email!";
  		}
    }
  }
}
