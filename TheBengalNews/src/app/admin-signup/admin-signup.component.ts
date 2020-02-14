import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TbnadminService } from "../tbnadmin.service";

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  [x: string]: any;

  @Input() user = { userId: '', password: ''}

  constructor(public tbnadminService: TbnadminService, private router: Router) { }

  ngOnInit() {
  }

  signUp(user){
    this.tbnadminService.signUp(this.user).subscribe((data: {}) => {
      this.router.navigate(['/tbnadminlogin'])
    })
  }

}
