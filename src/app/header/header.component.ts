import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  userName: string;
  
  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn(): Boolean {
    if ( this.authService.isLoggedIn()) {
      this.loggedIn = true;
      this.userName = this.authService.getUserName();
      return true;
    }
    this.loggedIn = false;
    return false;
  }
}
