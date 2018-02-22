import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutvComponent } from './aboutv.component';

describe('AboutvComponent', () => {
  let component: AboutvComponent;
  let fixture: ComponentFixture<AboutvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
