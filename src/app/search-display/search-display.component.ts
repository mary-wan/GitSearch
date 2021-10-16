import { UserService } from './../services/user.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Repo } from '../repo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  user!: User;
  repository:any=[];
  // userService!:UserService
  username!:any


  constructor(private userService:UserService,private router:Router) { 
    this.userService=userService
  }

  ngOnInit(): void {
    this.userService.getUserData(this.username)
    this.user = this.userService.user; 
    this.repository = this.userService.repositories

  }
  back(){
    this.router.navigate(['search']);
  }

}
