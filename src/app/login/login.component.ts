import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalDataService } from '../global-data.service';
import { BaseClassComponent } from '../base-class/base-class.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseClassComponent implements OnInit, OnDestroy {

  txtUserName = new FormControl();
  txtPassword = new FormControl();

  redirectTo: string;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, protected gd: GlobalDataService, protected translate: TranslateService) {
    super(gd, translate);
  }

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
      sessionStorage.setItem("loggedIn", "true");
      this.router.navigate(["/" + this.redirectTo]);
    }
  }

}
