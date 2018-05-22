import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;
    user = new User();
    emailTextBoxOptions: any;
    passwordTextBoxOptions: any;
    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.emailTextBoxOptions = {
            placeholder: 'Enter email...',
        };
        this.passwordTextBoxOptions = {
            placeholder: 'Enter password...',
        };
        this.createForm();
    }
    createForm() {
        this.signinForm = this.fb.group({
            email: [this.user.email, [Validators.email, Validators.required]],
            password: [this.user.password, [Validators.minLength(4), Validators.required]]
        });
    }
    onFormSubmit() {
        if (this.signinForm.valid) {
                  this.userService.login();
            let url = '';
            url = this.userService.getRedirectUrl();
            console.log('Redirect Url:' + url);
            this.router.navigate([ url ]);
              } else {
                this.userService.logout();
                alert('error');
                this.createForm();
              }
    }
  ngOnInit() {
  }
  dxClick() {
        alert('dx was click');
  }

}
