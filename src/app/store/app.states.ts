import { ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer } from '@ngrx/store';
import * as user from './reducers/user.reducers';
import * as proj from './reducers/project.reducers';


export interface AppState {
    userState: user.State;
    // projState: proj.ProjectState;
}

export const reducers: ActionReducerMap<AppState> = {
    userState: user.userReducer
};
// export function logger(reducer: ActionReducer<AppState>):
//     ActionReducer<AppState> {
//     return function (state: AppState, action: any): AppState {
//         console.log('state', state);
//         console.log('action', action);
//         return reducer(state, action);
//     };
// }
// export const metaReducers: MetaReducer<AppState>[] = [logger];

export const getUserState =
    createFeatureSelector<user.State>('isLoggedIn');

export const getIsLoggedIn = createSelector(
    getUserState,
    user.getIsLoggedIn,
);

export const getUser = createSelector(
    getUserState,
    user.getUser,
);
