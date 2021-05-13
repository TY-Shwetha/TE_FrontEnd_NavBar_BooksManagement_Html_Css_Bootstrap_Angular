import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  price=['1200Rs','600','800','1000','400'];
  constructor() { }

  ngOnInit(): void {
  }

}
