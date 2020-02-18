import {Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, PipeTransform, Pipe,} from '@angular/core';
import { Article } from '../article';
import { TbnadminService } from '../tbnadmin.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatInputModule, MatDialogConfig} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DomSanitizer } from "@angular/platform-browser";
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';
import { NewsFlashComponent} from '../news-flash/news-flash.component'
import { Router } from '@angular/router';


@Pipe({ name: 'safeHome' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-the-bengal-news-home',
  templateUrl: './the-bengal-news-home.component.html',
  styleUrls: ['./the-bengal-news-home.component.css']
})
export class TheBengalNewsHomeComponent implements OnInit {

  articlesJson: any = [];
  articles: Article[];
  topNewsArticle: Article;
  columnsToDisplay = ['image', 'title'];
  dataSource: any = [];
  isMobile: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tbnadminService: TbnadminService, private route: Router) { }

  ngOnInit() {
    if (window.screen.width <= 768) { // 768px portrait
      this.isMobile = true;
    }
    this.getArticles();
  }

  getArticles() {
    this.articlesJson = [];
    this.tbnadminService.getArticles().subscribe((data: {}) => {
      this.articlesJson = data;
      this.articles = this.articlesJson;
      this.articles.forEach(element => {
        if(element.topNews == true){
          this.topNewsArticle = element;
        }
      });
      this.dataSource = new MatTableDataSource<Article>(this.articles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showTopArticle(){
    this.route.navigate(['/home/'+this.topNewsArticle.title])
  }

  showArticle(title){
    this.route.navigate(['/home/'+ title])
  }

}
