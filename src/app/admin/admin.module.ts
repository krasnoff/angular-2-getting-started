import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { AuthenticatedGuard } from '../authenticated.guard';
import { GlobaldataService } from '../globaldata.service';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AdminComponent],
  providers: [AuthenticatedGuard, GlobaldataService]
})
export class AdminModule { }
