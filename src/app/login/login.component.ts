import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


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

  constructor(fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.myForm = fb.group({
        'user_id': ['', Validators.required],
        'password': ['', Validators.required]
      }
    );
    
    this.user_id = this.myForm.controls['user_id'];
    this.password = this.myForm.controls['password'];
  }

  login(user_id: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(user_id, password)){
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
      
    }
    
    this.router.navigate(['map']);
    return false;
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
