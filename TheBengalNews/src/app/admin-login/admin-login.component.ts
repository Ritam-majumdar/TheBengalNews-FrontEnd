import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TbnadminService } from "../tbnadmin.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @Input() user = { userId: '', password: ''}

  constructor(public tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
  }

  logIn(user){
    this.tbnadminService.logIn(this.user).subscribe((response: {}) => {
      console.log(response);
      this.router.navigate(['/articles']);
    })
  }

}
