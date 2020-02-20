import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openArticles(){
    this.router.navigate(['/articles']);
  }

  openMenus(){
    this.router.navigate(['/manage-menus']);
  }

  openKeywords(){
    console.log("Open Keyword");
    this.router.navigate(['/keywords']);
  }

  openSocial(){
    console.log("Open Social");
    this.router.navigate(['/social']);
  }

  logout(){
    if (window.confirm('Are you sure, you want to logout?')){
    localStorage.removeItem('TbnToken');
    this.router.navigate(['/home']);
    }
  }

}
