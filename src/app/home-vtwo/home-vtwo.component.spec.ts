import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVtwoComponent } from './home-vtwo.component';

describe('HomeVtwoComponent', () => {
  let component: HomeVtwoComponent;
  let fixture: ComponentFixture<HomeVtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
