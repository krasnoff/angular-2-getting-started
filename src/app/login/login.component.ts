import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GlobalDataService } from '../global-data.service';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private router: Router, private route: ActivatedRoute, private gd: GlobalDataService, private translate: TranslateService) {
    if (this.gd.shareObj['selectedLang'] == undefined)
      this.gd.shareObj['selectedLang'] = 'en'
    translate.setDefaultLang(this.gd.shareObj['selectedLang']);

    gd.changeLanguage$.subscribe(lang => this.onLangChange(lang))
  }

  onLangChange(lang: string) {
    console.log('from inner component: ' + lang);
    this.translate.setDefaultLang(this.gd.shareObj['selectedLang']);
  }

  public useLanguage(language: string) {
    this.translate.use(language);
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
