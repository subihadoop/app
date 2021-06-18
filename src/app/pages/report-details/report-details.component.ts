import { Component, OnInit } from '@angular/core';
import { reportservice } from '../../shared/services/report.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class reportDetailsComponent implements OnInit {
  currentreport = null;
  message = '';

  constructor(
    private reportservice: reportservice,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getreport(this.route.snapshot.paramMap.get('id'));
  }

  getreport(id) {
    this.reportservice.get(id)
      .subscribe(
        data => {
          this.currentreport = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentreport.title,
      description: this.currentreport.description,
      published: status
    };

    this.reportservice.update(this.currentreport.id, data)
      .subscribe(
        response => {
          this.currentreport.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatereport() {
    this.reportservice.update(this.currentreport.id, this.currentreport)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The report was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletereport() {
    this.reportservice.delete(this.currentreport.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/report']);
        },
        error => {
          console.log(error);
        });
  }
}
