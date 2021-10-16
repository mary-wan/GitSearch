import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username = new FormControl('');

  userService!: UserService;
  constructor(private router:Router,userService:UserService) { }

  ngOnInit(): void {
  }
  getUserData(username: FormControl){
    // this.userService.getUserData()
    // this.userService.getRepo()
    console.log(this.username);
  }
  showUser(){
    // this.router.navigate(['display']);
    alert(this.username.value);
    this.userService.getUserData(this.username)
    this.userService.getRepo(this.username)
  }

}
