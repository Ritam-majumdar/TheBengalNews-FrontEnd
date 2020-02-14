import { Component, OnInit, Input } from '@angular/core';
import { TbnadminService } from "../tbnadmin.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DdMenu } from '../ddMenu';
import { element } from 'protractor';


@Component({
  selector: 'app-admin-edit-menus',
  templateUrl: './admin-edit-menus.component.html',
  styleUrls: ['./admin-edit-menus.component.css']
})
export class AdminEditMenusComponent implements OnInit {

  id = this.actRoute.snapshot.params['mainMenuId'];
  mainMenuData: any = {};
  @Input() ddMenu = { title: '', mainMenu: '', position: 0 }
  ddMenusJson: any = [];
  ddMenus: DdMenu[];
  ddMenusMainMenu: DdMenu[];

  constructor(public tbnadminService: TbnadminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.tbnadminService.getMainMenu(this.id).subscribe((data: {}) => {
      this.mainMenuData = data;
    });
    this.getDdMenus();
  }

  editMainMenu() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.tbnadminService.updateMainMenu(this.id, this.mainMenuData).subscribe(data => {
        this.router.navigate(['/manage-menus'])
      })
    }
  }

  getDdMenus() {
    this.ddMenusJson = [];
    this.ddMenus = [];
    this.tbnadminService.getDdMenus().subscribe((data: {}) => {
      console.log(data);
      this.ddMenusJson = data;
      // this.ddMenus = this.ddMenusJson;
      this.ddMenusJson.forEach((element) => {
        console.log(element.mainMenu);
        console.log(this.mainMenuData.title)
        if(element.mainMenu == this.mainMenuData.title)
        {
          this.ddMenus.push(element);
        }
      });
      console.log("ddMenus:" + this.ddMenus);
    });
  }

  addDdMenu(ddMenu) {
    this.ddMenu.mainMenu = this.mainMenuData.title;
    console.log(this.ddMenu);
    this.tbnadminService.createDdMenu(this.ddMenu).subscribe((data: {}) => {
      console.log(data);
      location.reload();
    })
  }

  deleteDdMenu(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.tbnadminService.deleteDdMenu(id).subscribe(data => {
        this.getDdMenus()
      })
    }
  }

}
