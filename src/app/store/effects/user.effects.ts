import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Router } from '@angular/router';
// import { Actions } from '../actions/user.actions';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

// import { AuthService } from '../../services/auth.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions: Actions,
        // private authService: AuthService,
        private router: Router,
    ) {}

    // @Effect({ dispatch: false })
    // LogInSuccess: Observable<any> = this.actions.pipe(
    //     ofType(AuthActionTypes.LOGIN_SUCCESS),
    //     tap((user) => {
    //         localStorage.setItem('token', user.payload.token);
    //         this.router.navigateByUrl('/');
    //     })
    // );
    //
    // @Effect()
    // searchFood$: Observable<Action> = this.actions$
    //     .ofType(FoodActions.SEARCH)
    //     .map(toPayload)
    //     .switchMap(query => {
    //         return this.nutritionService.searchFood(query)
    //             .map(results => new FoodActions.SearchDone(results));
    //         // catch(() => of(new FoodActions.FetchFoodFail()))
    //     });


}