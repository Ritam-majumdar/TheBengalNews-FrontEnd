import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TbnadminService } from '../tbnadmin.service';
import { Article } from '../article';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-the-bengal-news-articles-by-menu',
  templateUrl: './the-bengal-news-articles-by-menu.component.html',
  styleUrls: ['./the-bengal-news-articles-by-menu.component.css']
})
export class TheBengalNewsArticlesByMenuComponent implements OnInit {


  articlesJson: any = [];
  articles: Article[];
  columnsToDisplay = ['image', 'title'];
  dataSource: any = [];
  topNewsArticle: Article;
  mobile: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public tbnadminService: TbnadminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    }
    console.log(this.mobile);
    this.actRoute.params.subscribe(routeParams => {
      this.getArticles(routeParams.mMenu, routeParams.ddMenu);
    });
  }

  getArticles(mMenu, ddMenu) {
    this.articlesJson = [];
    this.tbnadminService.getArticlesByMenu(mMenu, ddMenu).subscribe((data: {}) => {
      console.log(data);
      this.articlesJson = data;
      this.articles = this.articlesJson;
      console.log("Menus" + mMenu + ddMenu);
      this.articles.forEach(element => {
        if(element.topNewsDdMenu == true){
          this.topNewsArticle = element;
        }
      });
      this.dataSource = new MatTableDataSource<Article>(this.articles);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
