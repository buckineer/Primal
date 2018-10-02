import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
function passwordMatchValidator(g: FormGroup) {

  return g.get('new_pwd').value === g.get('repeat_pwd').value
      ? null : {'mismatch': true};
}

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  myForm: FormGroup;
  message:string;
  constructor(fb: FormBuilder,public authService: AuthService,private router: Router) {
  	this.myForm = fb.group({
  		'old_pwd': ['',Validators.required],
  		'new_pwd': ['',Validators.required],
  		'repeat_pwd': ['',Validators.required],      
  	},{'validator':passwordMatchValidator});
  }
  ngOnInit() {
  	this.message="";
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
      this.authService.update_password(form.old_pwd,form.new_pwd)
        .subscribe(resp=>{
          if(resp['type']=="error"){
            this.message = resp['message'];
          }else if(resp['type']=="success"){
            this.router.navigate(['/profile/edit']);
          }
        });
    	console.log("==========Submitted=========");
    }else{
      this.validateAllFormFields(this.myForm);
    }
  }
}
