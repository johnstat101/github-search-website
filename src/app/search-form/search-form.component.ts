import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public userInput:any;
  public githubProfile:any;
  public githubRepos!:any[];

  constructor(private githubService:GithubService) { }

  
  searchUser(){

    // get user profile
    this.githubService.getProfile(this.userInput).subscribe(data=>{
      this.githubProfile = data;
    }, error=>{
      console.log("An error occurred");
    })

    // get user repos
    this.githubService.getRepos(this.userInput).subscribe(data=>{
      this.githubRepos = data;
    }, error=>{
      console.log("An error occurred");
    })

  }

  ngOnInit(): void {
  }

}
