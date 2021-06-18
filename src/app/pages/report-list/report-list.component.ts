import { Component, OnInit } from '@angular/core';
import { reportservice } from '../../shared/services/report.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class reportsListComponent implements OnInit {

  report: any;
  currentreport = null;
  currentIndex = -1;
  title = '';

  constructor(private reportservice: reportservice) { }

  ngOnInit() {
    this.retrievereports();
  }

  retrievereports() {
    this.reportservice.getAll()
      .subscribe(
        data => {
          this.report = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrievereports();
    this.currentreport = null;
    this.currentIndex = -1;
  }

  setActivereport(report, index) {
    this.currentreport = report;
    this.currentIndex = index;
  }

  removeAllreports() {
    this.reportservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.reportservice.findByTitle(this.title)
      .subscribe(
        data => {
          this.report = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
