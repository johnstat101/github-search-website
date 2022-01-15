import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(http: HttpClient) {}
  // get github profile info
  
  public getProfile(){
    let dataURL = 'https://api.github.com/users/'
  }

// get github repository info


}
