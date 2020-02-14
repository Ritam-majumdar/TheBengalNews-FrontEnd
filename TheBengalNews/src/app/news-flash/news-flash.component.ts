import { Component, OnInit } from '@angular/core';
import { TbnadminService } from '../tbnadmin.service';
import { Article } from '../article';
declare function autoScroll(): any;

@Component({
  selector: 'app-news-flash',
  templateUrl: './news-flash.component.html',
  styleUrls: ['./news-flash.component.css']
})
export class NewsFlashComponent implements OnInit {
  articlesJson: any = [];
  articles: Article[];

  constructor(public tbnadminService: TbnadminService) { }

  ngOnInit() {
    this.getNewsFlash();
    autoScroll();
    
  }

  getNewsFlash() {
    this.articlesJson = [];
    this.tbnadminService.getFlashNews().subscribe((data: {}) => {
      console.log(data);
      this.articlesJson = data;
      this.articles = this.articlesJson;

    });
  }


}
