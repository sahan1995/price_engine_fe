import { Injectable } from '@angular/core';
import {CookieService} from "./cookie.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  constructor( private cookieService: CookieService, private http: HttpClient ) { }

  public currentUser(): any {
    if ( !this.user ) {
      this.user = JSON.parse(this.cookieService.getCookie(environment.cookies.currentUser));
    }
  }

  login( userName: string, password: string) {

    // Integrate get login logic here and set user details to the cookie
  }

  logout() {
    this.cookieService.deleteCookie(environment.cookies.currentUser);
    localStorage.clear();
    this.user = null;
  }
}
