import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcRebatePage } from './calc-rebate.page';

describe('CalcRebatePage', () => {
  let component: CalcRebatePage;
  let fixture: ComponentFixture<CalcRebatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcRebatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcRebatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
