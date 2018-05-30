import { User} from '../../users/models/user';
import * as UserActions from '../actions/user.actions';
import {Observable} from 'rxjs';


export interface State {
    user?: User;
    isLoggedIn: boolean;
}

export const initialState: State = {
    isLoggedIn: false
};

export function userReducer(state = initialState, action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.SIGNIN_USER: {
            return {
                ...state};
        }
        case UserActions.SIGNIN_SUCCESS: {
            state.isLoggedIn = true;
            state.user = action.payload;
            return {
                ...state};
        }
        case UserActions.LOGOUT_USER: {
            return {
                ...state};
        }
        default: {
            return state;
        }
    }
}

export const getUser = (state: State) => state.user;
export const getIsLoggedIn = (state: State) => state.isLoggedIn;