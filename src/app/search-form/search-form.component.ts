import { Component,OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repos-class/repository';
import { User } from '../users-class/user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  userInput!: string;
  public githubProfile!: User;
  public githubRepos!: Repository;
  public today!: Date

  constructor(private githubService:GithubService) {
  }

  searchUser(){
    // get user profile & Repos
    this.githubService.githubUser(this.userInput);
    this.githubService.githubRepos(this.userInput);
    this.githubProfile = this.githubService.user;
    this.githubRepos = this.githubService.repo;

  }

  ngOnInit(): void {
  }

}
