import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoginRequest } from './../models/loginRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = '/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private router: Router) {
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post(AUTH_API + 'signin', JSON.stringify(credentials), httpOptions);
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = this.tokenStorageService.getToken();

    if (!token) {
      return false;
    }
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    console.log('Expiration: ', expirationDate);
    console.log('isExpired: ', isExpired);
    return !isExpired;
  }

  get currentUser() {
    const helper = new JwtHelperService();
    const token = this.tokenStorageService.getToken();

    if (!token) {
      return false;
    }

    return helper.decodeToken(token);
  }
}
