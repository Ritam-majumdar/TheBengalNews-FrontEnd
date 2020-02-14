import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBengalNewsArticlesByMenuComponent } from './the-bengal-news-articles-by-menu.component';

describe('TheBengalNewsArticlesByMenuComponent', () => {
  let component: TheBengalNewsArticlesByMenuComponent;
  let fixture: ComponentFixture<TheBengalNewsArticlesByMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBengalNewsArticlesByMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBengalNewsArticlesByMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
