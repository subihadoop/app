import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reportDetailsComponent } from './report-details.component';

describe('reportDetailsComponent', () => {
  let component: reportDetailsComponent;
  let fixture: ComponentFixture<reportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ reportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(reportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
