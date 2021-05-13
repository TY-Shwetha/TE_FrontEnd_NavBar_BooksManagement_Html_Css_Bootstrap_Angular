import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review=['Good','Best','Inspiring','Good','Emotional'];
  constructor() { }

  ngOnInit(): void {
  }
}
