import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  private _isLoggedIn: boolean;
  constructor() {
    this.token = '';
    this._isLoggedIn = false;
  }

  setToken(token: string): void{
    this.token = token;
  }

  getToken(){
    return this.token
  }

  getIsLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
