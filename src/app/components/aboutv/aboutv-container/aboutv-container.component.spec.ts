import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutvContainerComponent } from './aboutv-container.component';

describe('AboutvContainerComponent', () => {
  let component: AboutvContainerComponent;
  let fixture: ComponentFixture<AboutvContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutvContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutvContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
