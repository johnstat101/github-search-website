import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../repos-class/repository';
import { User } from '../users-class/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repo: Repository

  constructor(private http:HttpClient) {
    this.user = new User("","","","","","",new Date,new Date);
    this.repo = new Repository("","","",new Date,new Date);
   }

   github(){
     interface ApiResponse{
       avatar_url:any; name:string; bio:string; public_repos:string; followers:string;
       following:string; created_at:Date; updated_at:Date;description:string; forks:string
     }
     let promise = new Promise((resolve,reject)=>
       this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
         this.user.avatar_url = response?.avatar_url
         this.user.bio = response!.bio
         this.user.name = response!.name
         this.user.public_repos = response!.public_repos
         this.user.followers = response!.followers
         this.user.following = response!.following

         resolve(response)
       },
       error=>{
        this.user.avatar_url = "Not Found"
        this.user.bio = "Not Found"
        this.user.name = "Not Found"
        this.user.public_repos = "Not Found"
        this.user.followers = "Not Found"
        this.user.following = "Not Found"

         reject(error)
       }))
     
     return promise
   }
   //dataURL = 'https://api.github.com/users/${userName}/repos?access_token='+ environment.apiKey

}
