import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';


export interface CanComponentLeave{
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave) {
    if(component.canLeave){
        return component.canLeave();
    }
    else{
      return true;
    }
  }
  
}
