import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    //console.log("no token");

    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      return true; // User is authenticated
    }


    //if (!token) {
      //this.router.navigate(['/']);  // Redirect to login if no token
      //return false;
    //}
    return true;
  }
}

