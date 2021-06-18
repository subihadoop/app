import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { reportservice } from '../../shared/services/report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reports: any;
  currentreport = null;
  currentIndex = -1;
  title = '';
  constructor(private _authService: AuthService,private _router: Router,private reportservice: reportservice) {
}

ngOnInit() {
this.userName();

//this.retrievereports();


}

userName(): string {
const userName = this._authService.getUserInfo();
return userName['first_name'];
}

}