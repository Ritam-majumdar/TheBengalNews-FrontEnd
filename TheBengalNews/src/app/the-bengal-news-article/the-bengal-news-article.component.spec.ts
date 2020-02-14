import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBengalNewsArticleComponent } from './the-bengal-news-article.component';

describe('TheBengalNewsArticleComponent', () => {
  let component: TheBengalNewsArticleComponent;
  let fixture: ComponentFixture<TheBengalNewsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBengalNewsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBengalNewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
