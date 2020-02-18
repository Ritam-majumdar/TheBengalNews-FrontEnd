import { Component, OnInit } from '@angular/core';
import { TbnadminService } from '../tbnadmin.service';
import { Article } from '../article';
declare function autoScroll(): any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-flash',
  templateUrl: './news-flash.component.html',
  styleUrls: ['./news-flash.component.css']
})
export class NewsFlashComponent implements OnInit {
  articlesJson: any = [];
  articles: Article[];

  constructor(public tbnadminService: TbnadminService, private route: Router) { }

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

  showArticle(title){
    this.route.navigate(['/home/'+ title])
  }

  


}
