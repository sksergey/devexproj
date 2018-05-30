import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appState from '../../store/app.states';
import { SigninUser} from '../../store/actions/user.actions';

import { User } from '../models/user';
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

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
        private store: Store<appState.AppState>) {
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
            this.user.email = this.signinForm.value['email'];
            this.user.password = this.signinForm.value['password'];
            console.log(this.user);
            const payload = this.user;
            this.store.dispatch(new SigninUser(payload));
        } else {
            // TODO error display & SigninError
            console.log('err form validation');
            this.createForm();
        }

        // if (this.signinForm.valid) {
        //           this.userService.login();
        //     let url = '';
        //     url = this.userService.RedirectUrl;
        //     console.log('Redirect Url:' + url);
        //     this.router.navigate([ url ]);
        //       } else {
        //         this.userService.logout();
        //         alert('error');
        //         this.createForm();
        //       }
    }
  ngOnInit() {
  }

}
