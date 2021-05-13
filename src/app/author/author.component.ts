import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author=['Harper Lee','F Scott Fitzgerald','Chinua Achebe','Herman Melville','Alice Walker' ];
  constructor() { }

  ngOnInit(): void {
  }

}
