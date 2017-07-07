import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { AuthenticatedGuard } from '../authenticated.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent],
  providers: [AuthenticatedGuard]
})
export class AdminModule { }
