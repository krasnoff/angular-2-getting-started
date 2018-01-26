import { Component, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('langSelect')langSelect: any;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }
}
