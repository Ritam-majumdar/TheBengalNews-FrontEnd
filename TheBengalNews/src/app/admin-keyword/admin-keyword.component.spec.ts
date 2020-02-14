import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKeywordComponent } from './admin-keyword.component';

describe('AdminKeywordComponent', () => {
  let component: AdminKeywordComponent;
  let fixture: ComponentFixture<AdminKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
