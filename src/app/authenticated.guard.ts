import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobaldataService } from './globaldata.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private gd: GlobaldataService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ((this.gd.shareObj['loggedin'] == 'true'))
      {
        return true;
      }
      else {
        this.router.navigate(["/login", state.url.replace(/\//gi, "")]);
        return false;
      }
  }
}
