import { Injectable } from '@angular/core';
import {Action, Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { map, tap } from 'rxjs/operators';

import * as projectActions from '../actions/project.actions';
import * as appState from '../app.states';

@Injectable()
export class ProjectEffects {

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

    @Effect({ dispatch: false })
    ShowKeywords = this.actions
        .ofType( projectActions.SHOW_KEYWORDS )
        .pipe(
            tap(() => {
                let id;
                this.store.select(appState.getCurrentProject).subscribe(val => id = val);
                let url = '/keywords/' + id;
                this.router.navigateByUrl(url);
            })
        );
}