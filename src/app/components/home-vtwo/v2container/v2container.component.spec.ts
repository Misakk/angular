import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2containerComponent } from './v2container.component';

describe('V2containerComponent', () => {
  let component: V2containerComponent;
  let fixture: ComponentFixture<V2containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
