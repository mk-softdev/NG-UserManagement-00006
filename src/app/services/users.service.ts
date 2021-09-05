import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getAPI(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .catch((error)=>{
      console.log(error)
      return Observable.throwError(error)
      
    })
    
  }

    routerUser(id:number){
      return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }

}
