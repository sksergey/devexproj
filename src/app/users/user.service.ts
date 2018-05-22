import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn: boolean;
  private signinUrl: string;
  private redirectUrl: string;
  constructor() {
      this.setIsLoggedIn(false);
      this.setSigninUrl('/signin');
      this.setRedirectUrl('');
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  setIsLoggedIn(val: boolean) {
    this.isLoggedIn = val;
  }
  getSigninUrl(): string {
        return this.signinUrl;
  }
  setSigninUrl(url: string): void {
        this.signinUrl = url;
  }
  getRedirectUrl(): string {
        return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
        this.redirectUrl = url;
  }
  login() {
        this.setIsLoggedIn(true);
  }
  logout() {
        this.setIsLoggedIn(false);
  }
}
