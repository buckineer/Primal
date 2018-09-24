import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {GlobalState} from '../state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  myForm: FormGroup;
  user_id: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder, public authService: AuthService, private router: Router,private globalState:GlobalState) {
    this.myForm = fb.group({
        'user_id': ['', Validators.required],
        'password': ['', Validators.required]
      }
    );
    
    this.user_id = this.myForm.controls['user_id'];
    this.password = this.myForm.controls['password'];
  }

  login(user_id: string, password: string) {
    this.message = '';
    this.authService.login(user_id,password)
      .subscribe( resp => {
        if(resp == "error") {
          this.message = 'Invalid Credentials';
        }else{
          console.log(resp)
          localStorage.setItem('token', resp.token);
          this.authService.get_current_user().subscribe(
            resp => {
              this.globalState.Current_User_Id = resp.profile;
              this.globalState.current_user = resp;
              localStorage.setItem('currentUser',resp.profile);
            }
            )
          this.router.navigate(['map'])
        }
      })
  }

  logout(): boolean {
    this.authService.logout();

    return false;
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    this.login(form.user_id, form.password);
    console.log('you submitted value', form);
  }

}
