import { Component, OnInit } from '@angular/core';
import { BaseClassComponent } from '../base-class/base-class.component';
import { GlobalDataService } from '../global-data.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component extends BaseClassComponent implements OnInit {

  constructor(protected gd: GlobalDataService, protected translate: TranslateService) { 
    super(gd, translate);
  }

  ngOnInit() {
  }

}
