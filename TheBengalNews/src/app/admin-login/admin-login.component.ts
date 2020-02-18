import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TbnadminService } from "../tbnadmin.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  responseMessage: any = null;
  @Input() user = { userId: '', password: ''}

  constructor(public tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
  }

  logIn(user){
    this.tbnadminService.logIn(this.user).subscribe((response: {}) => {
      console.log(response);
      this.responseMessage = response;
      console.log(this.responseMessage.token);
      const token = this.responseMessage.token;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-','+').replace('_','/');
      console.log(JSON.parse(window.atob(base64)));
      const decodedToken = JSON.parse(window.atob(base64));
      localStorage.setItem('TbnToken', token);
      this.router.navigate(['/tbn-admin-dashboard']);
    })
  }

}
