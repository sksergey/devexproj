import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs/';
import { map, tap } from 'rxjs/operators';

import * as ProjectActiong from '../actions/project.actions';
import { Project } from '../../projects/models/project';
import { Keyword } from '../../projects/models/keyword';

@Injectable()
export class ProjectEffects {

    constructor(
        private actions: Actions,
        // private authService: AuthService,
        private router: Router,
    ) {
    }

}