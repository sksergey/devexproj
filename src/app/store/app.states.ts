import { ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromUser from './reducers/user.reducers';
import * as fromProject from './reducers/project.reducers';


export interface AppState {
    users: fromUser.State;
    projects: fromProject.State;
}

export const reducers: ActionReducerMap<AppState> = {
    users: fromUser.userReducer,
    projects: fromProject.projectReducer
};

export const getUserState = createFeatureSelector<fromUser.State>('users');

export const getIsLoggedIn = createSelector(
    getUserState,
    fromUser.getIsLoggedIn,
);

export const getUser = createSelector(
    getUserState,
    fromUser.getUser,
);

export const getProjectState = createFeatureSelector<fromProject.State>('projects');

export const getProjects = createSelector(
    getProjectState,
    fromProject.getProjects,
);
export const getCurrentProject = createSelector(
    getProjectState,
    fromProject.getCurrentProject,
);









// export function logger(reducer: ActionReducer<AppState>):
//     ActionReducer<AppState> {
//     return function (state: AppState, action: any): AppState {
//         console.log('state', state);
//         console.log('action', action);
//         return reducer(state, action);
//     };
// }
// export const metaReducers: MetaReducer<AppState>[] = [logger];
