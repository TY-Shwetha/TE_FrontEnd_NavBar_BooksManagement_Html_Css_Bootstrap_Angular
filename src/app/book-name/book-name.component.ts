import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-name',
  templateUrl: './book-name.component.html',
  styleUrls: ['./book-name.component.css']
})
export class BookNameComponent implements OnInit {

  booksname=['To Kill a Mockingbird','The Great Gatsby','Things Fall Apart','Moby-Dick','The Color Purple'];
  constructor() { }

  ngOnInit(): void {
  }

}
