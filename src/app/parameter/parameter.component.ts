import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  ruser : any;

  constructor(private aroute:ActivatedRoute, private rursetbl:UsersService) { }

  ngOnInit() {
    let id = this.aroute.snapshot.params['id'];
    this.rursetbl.routerUser(id).subscribe(u=>{
      //console.log(u)
      this.ruser = u;
    })
  }

}
