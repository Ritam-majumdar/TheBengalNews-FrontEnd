import {Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, PipeTransform, Pipe,} from '@angular/core';

import { Article } from '../article';
import { TbnadminService } from '../tbnadmin.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatInputModule, MatDialogConfig} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DomSanitizer } from "@angular/platform-browser";
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AdminArticlesComponent implements OnInit {

  articlesJson: any = [];
  articles: Article[];
  columnsToDisplay = ['title', 'mMenu', 'ddMenu', 'topNews', 'topNewsDdMenu', 'flashNews', 'video', 'edit', 'delete'];
  dataSource: any = [];
  expandedElement: Article | null;
  video: string = "https://www.youtube.com/embed/4CtLDmdO824";
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tbnadminService: TbnadminService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getArticles(); 
  }

  getArticles() {
    this.articlesJson = [];
    this.tbnadminService.getArticles().subscribe((data: {}) => {
      console.log(data);
      this.articlesJson = data;
      this.articles = this.articlesJson;
      // this.articles.forEach(element => {
      //   element.content = element.content.replace('বামপন্থী','<a href="#">বামপন্থী</a>')
      // });
      this.dataSource = new MatTableDataSource<Article>(this.articles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteArticle(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.tbnadminService.deleteArticle(id).subscribe(data => {
        this.getArticles()
      })
    }
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;

    this.dialog.open(VideoDialogComponent, dialogConfig);
}

}
