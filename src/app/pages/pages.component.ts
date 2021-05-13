import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages=['200','300','100','80','500'];
  constructor() { }

  ngOnInit(): void {
  }

}
