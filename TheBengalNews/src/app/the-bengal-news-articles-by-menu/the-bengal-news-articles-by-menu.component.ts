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
  isMobile: boolean = false;
  mainMenu: string = "";
  ddMenu: string = "";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public tbnadminService: TbnadminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    if (window.screen.width <= 768) { // 768px portrait
      this.isMobile = true;
    }
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
      this.mainMenu = mMenu;
      this.ddMenu = ddMenu;
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

  showTopArticle(){
    this.router.navigate(['/home/'+this.topNewsArticle.title])
  }

  showArticle(title){
    this.router.navigate(['/home/'+ title])
  }

}
