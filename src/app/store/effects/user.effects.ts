import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { map, tap } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import {User} from '../../users/models/user';

@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        // private authService: AuthService,
        private router: Router,
    ) {}


    @Effect({ dispatch: false })
    Signin = this.actions
        .ofType(UserActions.SIGNIN_USER)
        .pipe(
            map((action: UserActions.SigninUser) => action.payload),
            tap(({email, password}) => {
                console.log('email:', email);
                console.log('pass:', password);
                this.router.navigateByUrl('/keywords/1');
            })
        );

    // @Effect()
    // SigninSuccess = this.actions
    //     .ofType(UserActions.SIGNIN_SUCCESS)
    //     .pipe(
    //         map((action: UserActions.SigninSuccess) => action.payload),
    //         tap(({}) =>
    //             this.router.navigateByUrl('/keywords/1')
    //         )
    //     );

}