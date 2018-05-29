import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../../users/models/user';

export const SIGNIN_USER = '[User] Signin';
export const SIGNIN_SUCCESS = '[User] SigninSuccess';
export const LOGOUT_USER = '[User] Logout';
export const GET_USER_STATE = '[User] GetUserState';

export class SigninUser implements Action {
    readonly type = SIGNIN_USER;

    constructor(public payload: User) {}
}

export class SigninSuccess implements Action {
    readonly type = SIGNIN_SUCCESS;

    constructor(public payload: User) {}
}

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;

    constructor(public payload: any) {}
}

export type Actions =
    SigninUser
    | SigninSuccess
    | LogoutUser;

