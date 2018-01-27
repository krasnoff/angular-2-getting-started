import { Component, OnInit } from '@angular/core';
import { BaseClassComponent } from '../base-class/base-class.component';
import { GlobalDataService } from '../global-data.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent extends BaseClassComponent implements OnInit {

  constructor(protected gd: GlobalDataService, protected translate: TranslateService) { 
    super(gd, translate);
  }

  ngOnInit() {
  }

}
