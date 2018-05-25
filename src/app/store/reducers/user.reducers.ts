import { User} from '../../users/models/user';
import * as UserActions from '../actions/user.actions';

export interface UserState {
    user: User | null;
    isLoggedIn: boolean;
}

export const initialUserState: UserState = {
    user: null,
    isLoggedIn: false
};

export function userReducer(state = initialUserState, action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.SIGNIN_USER: {
            console.log('case SIGNIN_USER');

            return {
                ...state};
        }
        case UserActions.SIGNIN_SUCCESS: {
            console.log('case SIGNIN_SUCCESS');
            state.isLoggedIn = true;
            state.user = action.payload;
            console.log('switch state:', state);
            return {
                ...state};
        }
        case UserActions.LOGOUT_USER: {
            console.log('case LOGOUT_USER');
            return {
                ...state};
        }
        default: {
            console.log('UNKNOWN user action being handled!');
            return state;
        }
    }
}