import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { IUser } from '../../Models/User.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  setHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                     .set('Authorization', 'Token ' + localStorage.getItem('token'));
    return headers;
  }

  loginUser(email: string, password: string) {
    const userLoginObject = Object.assign({}, {user: {email, password}});
    return this.http.post(environment.apiUrl + '/users/login', userLoginObject);
  }

  isLoggedIn(): boolean {
    if (this.currentUser) {
      return true;
    }
    return false;
  }

  saveUser(userDetails: any) {
    this.currentUser = userDetails['user'];
    localStorage.clear();
    // localStorage.setItem('token', this.currentUser.token);
    console.log(this.currentUser);
  }

  clearUser(): void {
    localStorage.clear();
    this.currentUser = null;
  }

  getUserName() {
    if (this.currentUser) {
      return this.currentUser.userName;
    }
    return null;
  }
}
