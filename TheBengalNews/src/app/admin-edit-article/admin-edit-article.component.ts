import { Component, OnInit } from '@angular/core';
import { TbnadminService } from "../tbnadmin.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Keyword } from '../keyword'; 
import { MainMenu } from '../mainMenu';
import { DdMenu } from '../ddMenu';

@Component({
  selector: 'app-admin-edit-article',
  templateUrl: './admin-edit-article.component.html',
  styleUrls: ['./admin-edit-article.component.css']
})
export class AdminEditArticleComponent implements OnInit {

  id = this.actRoute.snapshot.params['articleId'];
  articleData: any = {};
  keywordsJson: any = [];
  keywords: Keyword[];
  articleImage: string = "";
  mainMenusJson: any = [];
  mainMenus: MainMenu[];
  ddMenusJson: any = [];
  ddMenus: DdMenu[];
  ddMenusMainMenu: DdMenu[];

  

  constructor(public tbnadminService: TbnadminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.tbnadminService.getArticle(this.id).subscribe((data: {}) => {
      this.articleData = data;
      // console.log(this.articleData);
    });
    this.getMainMenus();

    this.getKeywords();
    this.getDdMenus();
  }

  editArticle() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.tbnadminService.updateArticle(this.id, this.articleData).subscribe(data => {
        this.router.navigate(['/articles'])
      })
    }
  }

  getKeywords() {
    this.keywordsJson = [];
    this.tbnadminService.getKeywords().subscribe((data: {}) => {
      // console.log(data);
      this.keywordsJson = data;
      this.keywords = this.keywordsJson;
      // console.log("keywords:" +this.keywords);
    });
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
        if(element.mainMenu == this.articleData.mMenu)
        {
          this.ddMenus.push(element);
        }
      });
      console.log("main menu: " + this.articleData.mMenu);
      console.log("ddMenus:" + this.ddMenus);
    });
  }

  receiveMessage($event) {
    console.log($event);
    this.articleImage = $event;
    this.articleData.articleImage = "http://localhost:3000/" + this.articleImage;
    // console.log(this.articleImage);
  }

  logout(){
    if (window.confirm('Are you sure, you want to logout?')){
    localStorage.removeItem('TbnToken');
    this.router.navigate(['/home']);
    }
  }

}
