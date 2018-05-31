import {Injectable, OnDestroy} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { map, tap } from 'rxjs/operators';

import * as projectActions from '../actions/project.actions';
import * as appState from '../app.states';
import {Subscription} from 'rxjs';

@Injectable()
export class ProjectEffects {
    subscription: Subscription;

    constructor(
        private actions: Actions,
        private router: Router,
        private store: Store<appState.AppState>
    ) {
    }

    @Effect({ dispatch: false })
    SelectProject = this.actions
        .ofType( projectActions.SELECT_PROJECT )
        .pipe(
            tap(() => {
                this.store.dispatch(new projectActions.ShowKeywors());
            })
        );

    // @Effect({ dispatch: false })
    // ShowKeywords = this.actions
    //     .ofType( projectActions.SHOW_KEYWORDS )
    //     .pipe(
    //         tap(() => {
    //             let id;
    //             this.subscription = this.store.select(appState.getCurrentProject).subscribe(val => id = val);
    //             let url = '/keywords/' + id;
    //             this.router.navigateByUrl(url);
    //         })
    //     );

    @Effect({ dispatch: false })
    ShowKeywords = this.actions
        .ofType( projectActions.SHOW_KEYWORDS )
        .pipe(
            tap(() => {
                let id;
                this.subscription = this.store.select(appState.getCurrentProject).subscribe(val => {
                    id = val;
                    if (typeof this.subscription !== 'undefined') {
                        this.subscription.unsubscribe();
                    }
                });
                let url = '/keywords/' + id;
                this.router.navigateByUrl(url);
            })
        );

}