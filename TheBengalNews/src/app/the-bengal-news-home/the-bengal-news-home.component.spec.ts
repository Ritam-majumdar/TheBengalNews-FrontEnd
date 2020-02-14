import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBengalNewsHomeComponent } from './the-bengal-news-home.component';

describe('TheBengalNewsHomeComponent', () => {
  let component: TheBengalNewsHomeComponent;
  let fixture: ComponentFixture<TheBengalNewsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBengalNewsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBengalNewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
