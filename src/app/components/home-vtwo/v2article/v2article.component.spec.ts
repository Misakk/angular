import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2articleComponent } from './v2article.component';

describe('V2articleComponent', () => {
  let component: V2articleComponent;
  let fixture: ComponentFixture<V2articleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2articleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2articleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
