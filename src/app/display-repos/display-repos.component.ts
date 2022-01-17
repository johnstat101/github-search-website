import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { Repository } from '../repos-class/repository';

@Component({
  selector: 'app-display-repos',
  templateUrl: './display-repos.component.html',
  styleUrls: ['./display-repos.component.css']
})
export class DisplayReposComponent implements OnInit {


  constructor(private githubService: GithubService) {
   }

  ngOnInit(): void {
  }

}
