import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url = '';
        url = state.url;
        console.log('Url:' + url);
        if (this.userService.getIsLoggedIn()) {
            return true;
        }
        this.userService.setRedirectUrl(url);
        this.router.navigate([ this.userService.getSigninUrl() ]);
        return false;
    }
}
