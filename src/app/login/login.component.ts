import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GlobaldataService } from '../globaldata.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtUserName = new FormControl();
  txtPassword = new FormControl();

  constructor(private gd: GlobaldataService, private router: Router) { }

  ngOnInit() {
  }

  doLogin(val: any): void {
    if (this.txtUserName.value == "user" && this.txtPassword.value == "1111") {
      this.gd.shareObj['loggedin'] = 'true';
      this.router.navigate(["/page2"]);
    }
  }

}
