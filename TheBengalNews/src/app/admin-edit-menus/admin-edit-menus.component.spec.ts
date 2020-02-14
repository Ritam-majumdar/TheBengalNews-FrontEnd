import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMenusComponent } from './admin-edit-menus.component';

describe('AdminEditMenusComponent', () => {
  let component: AdminEditMenusComponent;
  let fixture: ComponentFixture<AdminEditMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
