import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvHeaderBottomComponent } from './postv-header-bottom.component';

describe('PostvHeaderBottomComponent', () => {
  let component: PostvHeaderBottomComponent;
  let fixture: ComponentFixture<PostvHeaderBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvHeaderBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
