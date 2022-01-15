import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public http: HttpClient) {}
  // get github profile info
  
  public getProfile(userName:string):Observable<any>{
    let dataURL = 'https://api.github.com/users/${userName}?access_token=' + environment.apiKey
    return this.http.get<any>(dataURL).pipe(
      retry(1)
    );
  }

// get github repository info
public getRepos(userName:string):Observable<any[]>{
  let dataURL = 'https://api.github.com/users/${userName}/repos?access_token='+ environment.apiKey
  return this.http.get<any[]>(dataURL).pipe(
    retry(1)
  );
}


}
