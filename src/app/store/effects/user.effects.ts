import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';
import {User} from '../../users/models/user';
import {AppState} from '../app.states';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private store: Store<AppState>,
        private authService: AuthService,
    ) {}

    @Effect({ dispatch: false })
    SigninUser = this.actions
        .ofType(userActions.SIGNIN_USER)
        .pipe(
            map((action: userActions.SigninUser) => action.payload),
            switchMap(payload => {
                return this.authService.logIn(payload.email, payload.password)
                    .pipe(
                        map((res) => {
                            console.log('server res:', res.status);
                            if (res.status === 'success') {
                                let user = new User(payload.email, payload.password);
                                this.store.dispatch(new userActions.SigninSuccess( user ));
                            }
                        })
                    );
            })
            );

    @Effect({ dispatch: false })
    SigninSuccess = this.actions
        .ofType( userActions.SIGNIN_SUCCESS )
        .pipe(
            map(( action: userActions.SigninSuccess ) => action.payload),
            tap(() => {
                this.router.navigateByUrl('');
            })
        );

    // @Effect({ dispatch: false })
    // SigninSuccess = this.actions
    //     .ofType( userActions.SIGNIN_SUCCESS )
    //     .pipe(
    //         map(( action: userActions.SigninSuccess ) => action.payload),
    //         tap(() => {
    //             this.router.navigateByUrl('');
    //         })
    //     );

    // @Effect({ dispatch: false })
    // SigninUser = this.actions
    //     .ofType( userActions.SIGNIN_USER )
    //     .pipe(
    //         map(( action: userActions.SigninUser ) => action.payload),
    //         tap(({email, password}) => {
    //             let user = new User(email, password);
    //             console.log('!!!!test sign in');
    //             // this.store.dispatch(new userActions.SigninSuccess( user ));
    //             this.store.dispatch(new userActions.SigninSuccess( user ));
    //         })
    //         );
    //
}