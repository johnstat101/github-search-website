import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repos-class/repository';
import { User } from '../users-class/user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public userInput:any;
  public githubProfile!: User;
  public githubRepos!: Repository;

  constructor(private githubService:GithubService) { }

  
  searchUser(){
    // get user profile
    this.githubProfile = this.githubService.user;
    this.githubRepos = this.githubService.repo;

  }

  ngOnInit(): void {
    this.githubService.github();
  }

}
