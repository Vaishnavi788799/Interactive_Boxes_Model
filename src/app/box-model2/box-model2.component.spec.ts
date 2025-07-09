import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModel2Component } from './box-model2.component';

describe('BoxModel2Component', () => {
  let component: BoxModel2Component;
  let fixture: ComponentFixture<BoxModel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxModel2Component]
    });
    fixture = TestBed.createComponent(BoxModel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
