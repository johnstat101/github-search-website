import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public userInput!:string;
  
  searchUser(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
