import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from '../social';
import { TbnadminService } from '../tbnadmin.service';
@Component({
  selector: 'app-admin-social',
  templateUrl: './admin-social.component.html',
  styleUrls: ['./admin-social.component.css']
})
export class AdminSocialComponent implements OnInit {

  @Input() social = { title: '', position: 0 }
  socialsJson: any = [];
  socials: Social[];


  constructor(private tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
    this.getSocials();
  }

  getSocials() {
    this.socialsJson = [];
    this.tbnadminService.getSocials().subscribe((data: {}) => {
      console.log(data);
      this.socialsJson = data;
      this.socials = this.socialsJson;
      console.log("socials:" +this.socials);
    });
  }

  addSocial(social) {
    this.tbnadminService.createSocial(this.social).subscribe((data: {}) => {  
      console.log(data);
      location.reload();
    })
  }

  deleteSocial(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.tbnadminService.deleteSocial(id).subscribe(data => {
        this.getSocials()
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
