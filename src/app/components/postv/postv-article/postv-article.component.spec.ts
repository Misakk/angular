import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvArticleComponent } from './postv-article.component';

describe('PostvArticleComponent', () => {
  let component: PostvArticleComponent;
  let fixture: ComponentFixture<PostvArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
