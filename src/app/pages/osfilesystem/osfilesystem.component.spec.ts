import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsfilesystemComponent } from './osfilesystem.component';

describe('OsfilesystemComponent', () => {
  let component: OsfilesystemComponent;
  let fixture: ComponentFixture<OsfilesystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsfilesystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsfilesystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
