import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TbnadminService } from '../tbnadmin.service';
import { Article } from '../article';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

@Component({
  selector: 'app-the-bengal-news-article',
  templateUrl: './the-bengal-news-article.component.html',
  styleUrls: ['./the-bengal-news-article.component.css']
})
export class TheBengalNewsArticleComponent implements OnInit {
  article: any = {};
  video: string = "";
  articlesJson: any = [];
  articles: Article[];
  relatedKeyword: string;
  relatedArticle: String;
  constructor(public tbnadminService: TbnadminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(routeParams => {
      this.getArticle(routeParams.articletitle);

    });

    this.getArticles();

  }
  getArticle(title) {
    this.tbnadminService.getArticleByTitle(title).subscribe((data: {}) => {
      console.log(data);
      this.article = data[0];
      this.video = "https://www.youtube.com/embed/" + this.article.youtubeLink;
    
  });


  }

  getArticles() {
    this.articlesJson = [];
    this.tbnadminService.getArticles().subscribe((data: {}) => {
      this.articlesJson = data;
      this.articles = this.articlesJson;
      this.articles.forEach(element => {
        this.article.keywords.forEach( x => {
          if(element.keywords.includes(x))
          {
            if(element.title != this.article.title)
            {
              this.relatedArticle = element.title;
            this.relatedKeyword = x;
            console.log(this.relatedArticle);
            }
            
          }
        });

    });
  });
}
}
