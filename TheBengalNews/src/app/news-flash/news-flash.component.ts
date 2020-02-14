import { Component, OnInit } from '@angular/core';
declare function autoScroll(): any;

@Component({
  selector: 'app-news-flash',
  templateUrl: './news-flash.component.html',
  styleUrls: ['./news-flash.component.css']
})
export class NewsFlashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    autoScroll();
  }

}
