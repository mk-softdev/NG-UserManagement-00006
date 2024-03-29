import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private userService:UsersService){
    
  }
  
  resolve(){

    return this.userService.getAPI();

  }
}
