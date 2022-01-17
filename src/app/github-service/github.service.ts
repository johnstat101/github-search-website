import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Repository } from '../repos-class/repository';
import { User } from '../users-class/user';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;

  constructor(private http:HttpClient) {
    this.user = new User("","","","","","","","",new Date,new Date);
   }

   githubUser(userInput:string){
     interface ApiResponse{
       avatar_url:any; name:string; bio:string; public_repos:string; followers:string;
       following:string; created_at:Date; updated_at:Date;html_url:string;location:string
     }
     
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/'+userInput+'?client_id=' + environment.apiKey).toPromise().then(response=>{
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

   // get repositories
   githubRepos(userInput:any[]):Observable<any> {
    return this.http.get<any[]>('https://api.github.com/users/' + userInput + '/repos?client_id=' + environment.apiKey)
      .pipe(
        retry(1),
        catchError(this.handleErrors)
      );
  }
  public handleErrors(error: HttpErrorResponse ){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      errorMessage = 'MESSAGE: ${error.error.message}';
    }
    else{
      errorMessage = 'STATUS: ${error.status} MESSAGE: ${error.message}';
    }
    return throwError(errorMessage)
  }

}
