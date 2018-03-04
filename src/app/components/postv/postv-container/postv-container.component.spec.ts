import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvContainerComponent } from './postv-container.component';

describe('PostvContainerComponent', () => {
  let component: PostvContainerComponent;
  let fixture: ComponentFixture<PostvContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
