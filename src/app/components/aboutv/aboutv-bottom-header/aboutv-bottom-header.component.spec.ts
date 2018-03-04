import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutvBottomHeaderComponent } from './aboutv-bottom-header.component';

describe('AboutvBottomHeaderComponent', () => {
  let component: AboutvBottomHeaderComponent;
  let fixture: ComponentFixture<AboutvBottomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutvBottomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutvBottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
