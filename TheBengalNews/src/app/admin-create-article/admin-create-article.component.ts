import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TbnadminService } from "../tbnadmin.service";
import { Article } from '../article';
import { MainMenu } from '../mainMenu';
import { DdMenu } from '../ddMenu';
import { from } from 'rxjs'
import { Keyword } from '../keyword';

@Component({
  selector: 'app-admin-create-article',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.css']
})
export class AdminCreateArticleComponent implements OnInit {
  @Input() article = { title: '', titleEnglish: '', author: '', content: '', place: '', mMenu: '', ddMenu: '', youtubeLink: '', articleImage: '', imageCaption: '', topNews: false, topNewsDdMenu: false, flashNews: false, keywords: [], dateBengali: ''}
  mainMenusJson: any = [];
  mainMenus: MainMenu[];
  ddMenusJson: any = [];
  ddMenus: DdMenu[];
  ddMenusMainMenu: DdMenu[];
  articleImage: string = "";
  keywordsJson: any = [];
  keywords: Keyword[];
  availableKeyWords: any = [];

  constructor(public tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
    this.getMainMenus();
    this.getKeywords();
  }

  addArticle(article) {
    this.tbnadminService.createArticle(this.article).subscribe((data: {}) => {
      this.router.navigate(['/articles'])
    })
  }

  getMainMenus() {
    this.mainMenusJson = [];
    this.tbnadminService.getMainMenus().subscribe((data: {}) => {
      // console.log(data);
      this.mainMenusJson = data;
      this.mainMenus = this.mainMenusJson;
      // console.log("mainMenus:" +this.mainMenus);
    });
  }

  getDdMenus() {
    this.ddMenusJson = [];
    this.ddMenus = [];
    this.tbnadminService.getDdMenus().subscribe((data: {}) => {
      // console.log(data);
      this.ddMenusJson = data;
      // this.ddMenus = this.ddMenusJson;
      this.ddMenusJson.forEach((element) => {
        // console.log(element.mainMenu);
        // console.log(this.article.mMenu)
        if (element.mainMenu == this.article.mMenu) {
          this.ddMenus.push(element);
        }
      });
      console.log("main menu: " + this.article.mMenu);
      console.log("ddMenus:" + this.ddMenus);
    });
  }
  
  getKeywords() {
    this.keywordsJson = [];
    this.tbnadminService.getKeywords().subscribe((data: {}) => {
      console.log(data);
      this.keywordsJson = data;
      this.keywords = this.keywordsJson;
      console.log("keywords:" +this.keywords);
    });
  }
  detectKeyWords(){
    this.availableKeyWords = [];
    this.keywords.forEach(element => {
      
      if(this.article.content.includes(element.title))
      {
        this.availableKeyWords.push(element.title);
        this.article.keywords = this.availableKeyWords;
      }
      
    });
  }
  receiveMessage($event) {
    console.log($event);
    this.articleImage = $event;
    this.article.articleImage = "http://localhost:3000/" + this.articleImage;
    // console.log(this.articleImage);
  }
}
