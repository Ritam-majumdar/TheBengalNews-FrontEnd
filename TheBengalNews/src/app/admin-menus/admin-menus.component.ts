import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainMenu } from '../mainMenu';
import { TbnadminService } from '../tbnadmin.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-admin-menus',
  templateUrl: './admin-menus.component.html',
  styleUrls: ['./admin-menus.component.css']
})
export class AdminMenusComponent implements OnInit {

  @Input() mainMenu = { title: '', titleEnglish: '', position: 0}
  mainMenusJson: any = [];
  mainMenus: MainMenu[];
  

  constructor(private tbnadminService: TbnadminService, private router: Router, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.getMainMenus();
  }

  getMainMenus() {
    this.mainMenusJson = [];
    this.tbnadminService.getMainMenus().subscribe((data: {}) => {
      console.log(data);
      this.mainMenusJson = data;
      this.mainMenus = this.mainMenusJson;
      console.log(this.mainMenus);
      this.orderPipe.transform(this.mainMenus, "title");
      console.log(this.mainMenus);
      
    });
  }

  addMainMenu(mainMenu) {
    this.mainMenu.position = this.mainMenus.length + 1;
    this.tbnadminService.createMainMenu(this.mainMenu).subscribe((data: {}) => {  
      console.log(data);
    });
    location.reload();
  }

  deleteMainMenu(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.tbnadminService.deleteMainMenu(id).subscribe(data => {
        this.getMainMenus()
      })
    }
  }  

  refresh(){
    location.reload();

  }

}
