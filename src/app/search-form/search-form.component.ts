import { User } from './../user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  username!: string;

  userService!: UserService;
  constructor(private router:Router,private GitUserService:UserService) {
    this.userService=GitUserService
   }


  ngOnInit(): void {
    
  }
  getUsername(){
    console.log("=====",this.username);
    this.userService.getUserData(this.username);
    this.userService.getRepo(this.username);
 
      this.router.navigate(['display']);
   
  }
 

}
