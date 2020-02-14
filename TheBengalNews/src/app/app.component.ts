import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainMenu } from './mainMenu';
import { DdMenu } from './ddMenu';
import { TbnadminService } from './tbnadmin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Bengal News';
  tabs: string[] = ["International", "National", "State"];
  mainMenusJson: any = [];
  mainMenus: MainMenu[] = [];
  mainMenusOrdered: MainMenu[] = [];
  ddMenusJson: any = [];
  ddMenus: DdMenu[];
  ddMenusMainMenu: DdMenu[];
  refMenu: string = "";
  isMobile: boolean = false;

  constructor(private tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
    
    if (window.screen.width <= 768) { // 768px portrait
      this.isMobile = true;
    }
    this.getMainMenus();
    this.getDdMenus();
  }

  getMainMenus() {
    this.mainMenusJson = [];
    this.tbnadminService.getMainMenus().subscribe((data: {}) => {
      console.log(data);
      this.mainMenusJson = data;
      this.mainMenus = this.mainMenusJson;
      console.log("mainMenus:" + this.mainMenus);
      for(var i = 0; i < this.mainMenus.length; i++){
        this.mainMenus.forEach(element => {
          if(element.position == i+1)
          this.mainMenusOrdered[i] = element;
        });
      }
      console.log(this.mainMenusOrdered);
    });
  }

  getDdMenus() {
    this.ddMenusJson = [];
    this.ddMenus = [];
    this.tbnadminService.getDdMenus().subscribe((data: {}) => {
      console.log(data);
      this.ddMenusJson = data;
      this.ddMenus = this.ddMenusJson;
      console.log("DD menus: " + this.ddMenusJson)
    });
  }

  gotoMenu(mMenu, ddMenu){
    
    this.router.navigateByUrl('/home/'+ mMenu+ '/' + ddMenu);
  }
  setMainMenu(mMenu){
    this.refMenu = mMenu;
  }
}

