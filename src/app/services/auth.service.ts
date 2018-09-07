import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  login(user_id: string, password: string): boolean {
    if (user_id === 'user' && password === 'password'){
      localStorage.setItem('username', user_id);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  constructor() { }

}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
