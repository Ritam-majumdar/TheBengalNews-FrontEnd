import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Keyword } from '../keyword';
import { TbnadminService } from '../tbnadmin.service';


@Component({
  selector: 'app-admin-keyword',
  templateUrl: './admin-keyword.component.html',
  styleUrls: ['./admin-keyword.component.css']
})
export class AdminKeywordComponent implements OnInit {

  @Input() keyword = { title: '', position: 0 }
  keywordsJson: any = [];
  keywords: Keyword[];


  constructor(private tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
    this.getKeywords();
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

  addKeyword(keyword) {
    this.tbnadminService.createKeyword(this.keyword).subscribe((data: {}) => {  
      console.log(data);
      location.reload();
    })
  }

  deleteKeyword(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.tbnadminService.deleteKeyword(id).subscribe(data => {
        this.getKeywords()
      })
    }
  }
  
  logout(){
    if (window.confirm('Are you sure, you want to logout?')){
    localStorage.removeItem('TbnToken');
    this.router.navigate(['/home']);
    }
  }


}
