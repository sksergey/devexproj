import {Injectable, Input} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService} from './user.service';
import {Observable, Subscription} from 'rxjs';

import * as userReducer from '../store/reducers/user.reducers';
import * as appState from '../store/app.states';
import * as userAction from '../store/actions/user.actions';
import { Store} from '@ngrx/store';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router, private store: Store<appState.AppState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        let url = '';
        url = state.url;
        console.log('Url:' + url);

        return this.store.select(appState.getIsLoggedIn).pipe(
            map(val => {
                console.log('val: ', val);
                if (val) {
                    return true;
                } else {
                    this.userService.RedirectUrl = url;
                    this.router.navigate([ this.userService.SigninUrl ]);
                    return false;
                }
            })
        );

        //
        //
        //
        // this.isLoggedIn$ = this.store.select(appState.getIsLoggedIn).subscribe(val => this.isLoggedIn$ = val);
        // let tmp = this.store.select(appState.getIsLoggedIn).subscribe(val => this.isLoggedIn = val);
        // // this.store.select(appState.getIsLoggedIn).subscribe(val => this.isLoggedIn = val);
        //
        // console.log('isLoggedIn(canActivate):' + this.isLoggedIn);
        // if (this.isLoggedIn) {
        //     return true;
        // }
        //
        // // console.log('!!isLoggedIn:' + this.userService.IsLoggedIn);
        // // if (this.userService.IsLoggedIn) {
        // //     return true;
        // // }
        //
        // // ---------------------------------------
        // this.userService.RedirectUrl = url;
        // this.router.navigate([ this.userService.SigninUrl ]);
        // // ---------------------------------------
        // return false;
    }
}
