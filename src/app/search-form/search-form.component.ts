import { User } from './../user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Repo } from '../repo';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  User!:User 
  username!: string;
  userService!: UserService;

  constructor(private router:Router,private GitUserService:UserService) {
    this.userService=GitUserService
   }

  ngOnInit(): void {
    
  }
  getUsername(){
    // console.log("=====",this.username);
    this.userService.getUserData(this.username);
    this.userService.getRepo(this.username);
    this.User = this.userService.user;
    this.router.navigate(['display']);
   
  }
 
}
