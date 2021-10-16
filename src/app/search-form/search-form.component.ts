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

  // gitForm = new FormGroup({
  //   username: new FormControl(''),
    
  // });
  // username = new FormControl('');
  username!: string;

  userService!: UserService;
  constructor(private router:Router) { }

  user! : User

  

  ngOnInit(): void {
  }
  getData(){
    console.log("=====",this.username);
    // this.userService.getUserData(this.username);
    // this.userService.getUserData(this.username).then(()=>{
    //   this.userService.username= this.username 
    // })
    // this.userService.getRepo(this.username.value)
      this.router.navigate(['display']);
   
  }
  // showUser(){
  //   // this.router.navigate(['display']);
  //   alert(this.username.value);
  //   this.userService.getUserData(this.username)
  //   this.userService.getRepo(this.username)
  // }

}
