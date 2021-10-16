import { Repo } from './../repo';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User;
  repository: Repo
  repositories:any= []
  UserInfo :any = []; 
  url= environment.apiUrl;
  apiKey =environment.apiKey


  constructor(private httpClient:HttpClient) {  
     this.user = new User("","","","",0,new Date(),new Date());
     this.repository = new Repo("","","","","",new Date(),new Date())
   }

  getUserData(username:string){
    this.repositories.length = 0;

    interface ApiResponse{
     name: string, 
      avatar_url: any, 
      html_url: string, 
      public_repos: number,
      created_at: Date,
      updated_at:Date
    }

    let promise = new Promise<ApiResponse | void>((resolve,reject)=>{
      // this.httpClient.get<any>(this.url + username + this.apiKey).toPromise()
      this.httpClient.get<any>(this.url + username + this.apiKey).toPromise()
      .then(response=>{
          
        this.user.name= response.name;
        this.user.login= response.login;
        this.user.avatar_url= response.avatar_url;
        this.user.html_url= response.html_url;
        this.user.public_repos= response.public_repos;
        this.user.created_at= response.created_at;
        this.user.updated_at= response.updated_at;

        resolve()
      },
      error=>{
       console.log(error.message);
       
        reject(error)
      })
       
      // this.httpClient.get<any>(this.url+username+"/repos"+this.apiKey ).toPromise()
      // .then(response=>{
       
       
      //   for(let i=0; i<response.length; i++)
	    //     	{
	        	
	    //     		this.UserInfo = new Repo(response[i].html_url,response[i].clone_url,response[i].name,response[i].description,response[i].created_at,response[i].updated_at,response[i].language);
	    //     		this.repositories.push(this.UserInfo);
	    //     	}
      //       resolve()
      // },
      // error=>{
      //  console.log(error.message);
       

      //   reject(error)
      // })
     
    })
    return promise;
  }
  getRepo(username:String){

    let promise = new Promise<void>((resolve,reject)=>{
      this.httpClient.get<any>(this.url+username+"/repos"+this.apiKey ).toPromise()
      .then(response=>{
          console.log("&&&&&&&&&&&&",response);
          
        this.repository= response
       
        resolve(response)
        for(var i=0; i<response.length; i++)
	        	{
	        	
              this.UserInfo = new Repo(response[i].html_url,response[i].clone_url,response[i].name,response[i].description,response[i].created_at,response[i].updated_at,response[i].language);
	        		this.repositories.push(this.UserInfo);
	        	}
      },
      error=>{
       console.log(error.message);
       

        reject(error)
      })
     
    })
    return promise;
  }
  
}
