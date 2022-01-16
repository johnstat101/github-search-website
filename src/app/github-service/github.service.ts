import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  quote: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
   }

   quoteRequest(){
     interface ApiResponse{
       quote:string;
       author:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
         this.quote.quote = response.quote
         this.quote.author = response.author

         resolve()
       },
       error=>{
         this.quote.quote = "Never, never, never give up"
         this.quote.author = "Winston Churchill"

         reject(error)
       })
     })
     return promise
   }

  dataURL = 'https://api.github.com/users/${userName}/repos?access_token='+ environment.apiKey

}
