import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtUserName = new FormControl();
  txtPassword = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  doLogin(val: any): void {
    debugger;
  }

}
