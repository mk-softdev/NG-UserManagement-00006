import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private authSerive:AuthService){

    

  }
  canActivateChild() {
    if(this.authSerive.isAdminRole){
      return true;
    }
    else{
      return false
    }
  }


  
}
