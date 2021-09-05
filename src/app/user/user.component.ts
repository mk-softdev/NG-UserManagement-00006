import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : any [] = [];
  errormessage : string = ''
  constructor(private userTable:UsersService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    // this.userTable.getAPI().subscribe((data:any)=>{
    //   this.users = data
    // },(er)=>{
    //   return this.errormessage = 'Invalid API';
    // })

    this.users = this.activatedRoute.snapshot.data['data']; 


  }

}
