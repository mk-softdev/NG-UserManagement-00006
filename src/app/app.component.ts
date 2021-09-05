import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing';

  users : any [] = [];

  errormessage : string = '';


  constructor(private userTable:UsersService){

  }

  ngOnInit(){

    this.userTable.getAPI().subscribe((data:any)=>{
      this.users = data;
    },(err)=>{
      //return this.errormessage = 'Some internal issues while making API call';
      return this.errormessage = err.name;
    })

  }


}
