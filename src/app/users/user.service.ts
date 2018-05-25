import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn: boolean;
  private _signinUrl: string;
  private _redirectUrl: string;
  constructor() {
      this.IsLoggedIn = false;
      this.SigninUrl = '/signin';
      this.RedirectUrl = '';
  }
  get IsLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  set IsLoggedIn(val: boolean) {
    this._isLoggedIn = val;
  }
  get SigninUrl(): string {
    return this._signinUrl;
  }
  set SigninUrl(url: string) {
    this._signinUrl = url;
  }
  get RedirectUrl(): string {
    return this._redirectUrl;
  }
  set RedirectUrl(url: string) {
    this._redirectUrl = url;
  }
  login() {
        this.IsLoggedIn = true;
  }
  logout() {
        this.IsLoggedIn = false;
  }
}
