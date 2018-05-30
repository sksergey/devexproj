import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _signinUrl: string;
  private _redirectUrl: string;
  constructor() {
      this.SigninUrl = '/signin';
      this.RedirectUrl = '';
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
}