import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repos-class/repository';

@Component({
  selector: 'app-display-repos',
  templateUrl: './display-repos.component.html',
  styleUrls: ['./display-repos.component.css']
})
export class DisplayReposComponent implements OnInit {
  userInput: any;
  public repos!: any[];
  public errorMessage!: string;

  constructor(private githubService:GithubService) {
    // get user Repos
    this.githubService.githubRepos(this.userInput).subscribe(repos => {
      this.repos = repos;
    }, (error)=>{
      this.errorMessage = error;
    });

  }

  searchUser(){
    
  }

  ngOnInit(): void {
  }

}
