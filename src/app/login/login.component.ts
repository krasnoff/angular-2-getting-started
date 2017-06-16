import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GlobaldataService } from '../globaldata.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  txtUserName = new FormControl();
  txtPassword = new FormControl();

  redirectTo: string;
  private sub: any;

  constructor(private gd: GlobaldataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.redirectTo = params['redirectTo']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  doLogin(val: any): void {
    if (this.txtUserName.value == "user" && this.txtPassword.value == "1111") {
      this.gd.shareObj['loggedin'] = 'true';
      this.router.navigate(["/" + this.redirectTo]);
    }
  }

}
