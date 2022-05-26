import { Injectable } from '@angular/core';
import  {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private route : Router) { }

  loggedIn() {
    return !!localStorage.getItem('token');

  }
  logoutUser() {
    localStorage.removeItem('token');
    this.route.navigate(['/home']);
  }
  getToken() {
    return localStorage.getItem('token');  }
}
