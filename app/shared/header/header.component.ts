import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { reportservice } from '../../shared/services/report.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _router: Router, private reports: reportservice) {
  }

  ngOnInit() {
      this.userName();
      this.getcount();
  }

  userName(): string {
      const userName = this._authService.getUserInfo();
      return userName['first_name'];
  }
  getcount(): string {
    const userName = this.reports;
    return userName['count'];
}
  logout() {
      this._authService.logout();
      this._router.navigate(['/user/login']);
  }
}