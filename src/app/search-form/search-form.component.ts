import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username = new FormControl('');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getUserData(){

  }
  showUser(){
    this.router.navigate(['display']);
  }

}
