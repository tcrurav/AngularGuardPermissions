import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;

  roleAs: string = "";

  constructor(private permissionsService: NgxPermissionsService) { }

  login(value: string) {

    const perm: any[] = [value];
    this.permissionsService.loadPermissions(perm);

    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {

    const perm: any[] = [];
    this.permissionsService.loadPermissions(perm);

    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE') || "";
    return this.roleAs;
  }
}
