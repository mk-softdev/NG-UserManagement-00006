import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  

  constructor(private autServ:AuthService){

  }

  canActivate() {
    if(this.autServ.isUserLoggedIn){
      return true
    }
    else{
      window.alert('Permission denied.')
      return false;
    }
  }
  
}
