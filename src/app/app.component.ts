import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { GlobalDataService } from './global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @ViewChild('innerRouter')innerRouter: any;

  @Output() onLangChange = new EventEmitter<string>();

  constructor(private translate: TranslateService, private gd: GlobalDataService, private renderer:Renderer) {
    if (this.gd.shareObj['selectedLang'] == undefined)
      this.gd.shareObj['selectedLang'] = 'en'
    translate.setDefaultLang(this.gd.shareObj['selectedLang']);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.onLangChange.emit(language);

    
  }
}
