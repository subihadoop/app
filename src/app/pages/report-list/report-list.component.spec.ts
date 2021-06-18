import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reportsListComponent } from './report-list.component';

describe('reportsListComponent', () => {
  let component: reportsListComponent;
  let fixture: ComponentFixture<reportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ reportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(reportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
