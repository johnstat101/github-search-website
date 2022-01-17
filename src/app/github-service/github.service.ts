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
    this.user = new User("","","","","","","","",new Date,new Date);
    this.repo = new Repository("","","",new Date,new Date);
   }

   githubUser(userInput:string){
     interface ApiResponse{
       avatar_url:any; name:string; bio:string; public_repos:string; followers:string;
       following:string; created_at:Date; updated_at:Date;html_url:string;location:string
     }
     
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/'+userInput).toPromise().then(response=>{
       this.user.avatar_url = response?.avatar_url
         this.user.bio = response!.bio
         this.user.name = response!.name
         this.user.public_repos = response!.public_repos
         this.user.followers = response!.followers
         this.user.following = response!.following
         this.user.created_at = response!.created_at
        this.user.updated_at = response!.updated_at
        this.user.html_url = response!.html_url
        this.user.location = response!.location

         resolve(response)
       },
       error=>{
        this.user.name = "Not Found"

         reject(error)
       })
      })
     
     return promise
   }
   

   githubRepos(userInput:string){
    interface ApiResponse{
      name:string; created_at:Date; updated_at:Date;description:string; forks:string
    }
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+userInput+'/repos').toPromise().then(response=>{
        this.repo.name = response!.name
        this.repo.description = response!.description
        this.repo.forks = response!.forks
        this.repo.created_at = response!.created_at
        this.repo.updated_at = response!.updated_at

        resolve(response)
      },
      error=>{
        this.repo.name = "Not Found"
        
        reject(error)
      })
     })
    
    return promise
  }

}
