import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MdTabsModule } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { NotifyService } from '../services/notify.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: any;

  constructor(private authService: AuthService, private router: Router, private NotifyService: NotifyService) { }

  globalFormControl = new FormControl('', [
    Validators.required]);

  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    // .catch(error => this.errorMsg = error.message);
    // .catch(error => this.errorMsg = error.message);
  }

  passReset: boolean = false;
  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => this.passReset = true)
  }

  rememberMe() {
    this.authService.rememberMe(this.email, this.password)
  }
}
