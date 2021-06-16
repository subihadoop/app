import { Component, OnInit } from '@angular/core';
import { reportservice } from '../../shared/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddreportComponent implements OnInit {
  report = {
    title: '',
    description: '',
    published: false,
    status:''
    
  };
  submitted = false;

  constructor(private reportservice:  reportservice) { }

  ngOnInit() {
  }

  savereport() {
    const data = {
      title: this.report.title,
      description: this.report.description,
      status: this.report.status
    };


    this.reportservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newreport() {
    this.submitted = false;
    this.report = {
      title: '',
      description: '',
      published: false,
      status:''
      
    };
  }

}
