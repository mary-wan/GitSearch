import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Repo } from '../repo';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  user!: any;
  repository:any=[]
  // repository!:any
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUserData().then((users)=>{
      console.log("..........",users);
      this.user = users
    })
    this.userService.getRepo().then((repository)=>{
      this.repository = repository
      console.log(">>>>>>>>>>>",repository);
    })
  }
  back(){
    this.router.navigate(['search']);
  }

}
