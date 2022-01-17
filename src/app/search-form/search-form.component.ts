import { Component,OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repos-class/repository';
import { User } from '../users-class/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  userInput: any;
  public githubProfile!: User;
  public repos!: any[];
  public errorMessage!: string;

  constructor(private githubService:GithubService) {
    this.githubService.githubRepos(this.userInput).subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  searchUser(){
    // get user profile & Repos
    this.githubService.githubUser(this.userInput);
    this.githubService.githubRepos(this.userInput);
    this.githubProfile = this.githubService.user;

    this.githubService.githubRepos(this.userInput).subscribe(repos => {
      this.repos = repos;
    }, (error)=>{
      this.errorMessage = error;
    
    });

  }

  ngOnInit(): void {
  }

}
