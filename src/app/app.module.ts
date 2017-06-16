import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthenticatedGuard } from './authenticated.guard';
import { GlobaldataService } from './globaldata.service';

const routes: Routes = [
  { path: 'page1', component: Page1Component, canActivate: [AuthenticatedGuard] },
  { path: 'page2', component: Page2Component, canActivate: [AuthenticatedGuard] },
  { path: 'login/:redirectTo', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticatedGuard, GlobaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
