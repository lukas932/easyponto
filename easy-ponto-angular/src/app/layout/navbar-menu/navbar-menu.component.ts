import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html'
})
export class NavbarMenuComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }

}
