import {Injectable, Input} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService} from './user.service';
import { Observable } from 'rxjs';

import * as userReducer from '../store/reducers/user.reducers';
import * as appState from '../store/app.states';
import * as userAction from '../store/actions/user.actions';
import { Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {
    isLoggedIn$: Observable<boolean>;

    islog: boolean;

    constructor(private userService: UserService, private router: Router, private store: Store<appState.AppState>) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url = '';
        url = state.url;
        console.log('Url:' + url);
        this.isLoggedIn$ = this.store.select(appState.getIsLoggedIn);

        this.isLoggedIn$.subscribe(val => console.log('!!!!!!!!!!!!!!' + val));
        // console.log('!!userstate isLoggedIn:' + this.islog);

        // console.log('!!userstate isLoggedIn:' + userState.isLoggedIn);
        // if (userState.isLoggedIn) {
        //     return true;
        // }

        // console.log('!!isLoggedIn:' + this.userService.IsLoggedIn);
        // if (this.userService.IsLoggedIn) {
        //     return true;
        // }

        this.userService.RedirectUrl = url;
        this.router.navigate([ this.userService.SigninUrl ]);
        return false;
    }
}
