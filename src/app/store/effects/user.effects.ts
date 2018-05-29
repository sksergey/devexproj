import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';
import {User} from '../../users/models/user';
import {AppState} from '../app.states';


@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        // private authService: AuthService,
        private router: Router,
        private store: Store<AppState>
    ) {}

    @Effect({ dispatch: false })
    SigninUser = this.actions$
        .ofType( userActions.SIGNIN_USER )
        .pipe(
            map(( action: userActions.SigninUser ) => action.payload),
            tap(({email, password}) => {
                console.log('email:', email);
                console.log('pass:', password);
                let user = new User(email, password);
                this.store.dispatch(new userActions.SigninSuccess( user ));
                // this.router.navigateByUrl('/keywords/1');
            })
        );

    @Effect({ dispatch: false })
    SigninSuccess = this.actions$
        .ofType( userActions.SIGNIN_SUCCESS )
        .pipe(
            map(( action: userActions.SigninSuccess ) => action.payload),
            tap(({email, password}) => {
                // console.log('email:', email);
                // console.log('pass:', password);
                // let user = new User(email, password);
                // this.store.dispatch(new userActions.SigninSuccess( user ));
                // this.router.navigateByUrl('');
                this.router.navigateByUrl('/keywords/1');
            })
        );

    // @Effect({ dispatch: false })
    // GetUserState = this.actions$
    //     .ofType( userActions.GET_USER_STATE )
    //     .pipe(
    //         map(( action: userActions.GetUserState ) => action.payload),
    //         tap(() => {
    //             return this.
    //         })
    //     );


}