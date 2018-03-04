import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvBottomContainerComponent } from './postv-bottom-container.component';

describe('PostvBottomContainerComponent', () => {
  let component: PostvBottomContainerComponent;
  let fixture: ComponentFixture<PostvBottomContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvBottomContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvBottomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
