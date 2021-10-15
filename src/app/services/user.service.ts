import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  users!: User;
  username = new FormControl('');

  getUserData(){

    let promise = new Promise<void>((resolve,reject)=>{
      this.httpClient.get<any>("https://api.github.com/users/mary-wan" ).toPromise()
      .then(response=>{
        console.log("RESPONSE :",response);
        resolve((response))
      },
      error=>{
       console.log(error.message);
       

        reject(error)
      })
    })
    return promise
  }
  
}
